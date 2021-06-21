const config = require('../config');
const Crypto = require('../handlers/crypto');
const jwt = require("jsonwebtoken");

const checkUserSessionExpired = function (tokenCreationDate) {
    let aWeekAgo = Date.now() - config.USER_SESSION_EXPIRATION;
    return tokenCreationDate < aWeekAgo
}

const createToken = function (data) {
    let jwtDataPayload = {user: data[0].email};

    let dateOfIssue = new Date()
    let jwtPayload = {"data": jwtDataPayload, "doi": dateOfIssue.getTime()}
    let payload = Crypto.encryptObject(jwtPayload)

    return jwt.sign({payload}, config.ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: config.ACCESS_TOKEN_LIFE,
    })
}

const combineMembers = function (locations, genres, professions) {
    let map = new Map(genres.map(o => [o['alias1'], o]));
    let lg = locations.reduce((acc, o) => {
        let match = map.get(o['alias1']);
        return match ? acc.concat({ ...o, ...match }) : acc;
    }, []);

    let professionsMap = new Map(professions.map(o => [o['alias1'], o]));
    return lg.reduce((acc, o) => {
        let match = professionsMap.get(o['alias1']);
        return match ? acc.concat({ ...o, ...match }) : acc;
    }, []);
}

const buildLocationQuery = function (locations) {
    let queryString = ``
    let continent = ''
    let country = ''
    let state = ''
    let city = ''
    let filter = []
    let index = 1;

    //build arrays here
    for (let i = 0; i < locations.length; i++) {
        let l = locations[i].split(';')
        let shift = 2
        if (index > 10) {
            shift = 3
        } else if (index > 100) {
            shift = 4
        }
        if (l.length === 3) { //continent;country;state
            if (state === '') {
                state = `ARRAY [$${index}] && (array_agg(state_long_name || ';' || country_name || ';' || continent_name)) `
            } else {
                let i = state.lastIndexOf("$")
                let newString = `, $${index}`
                state = [state.slice(0, i + shift), newString, state.slice(i + shift)].join('');
            }
            index++
            filter.push(`${l[2]};${l[1]};${l[0]}`)
        } else if (l.length === 2) { //continent;country
            if (country === '') {
                country = `ARRAY [$${index}] && (array_agg(country_name || ';' || continent_name)) `
            } else {
                let i = country.lastIndexOf("$")
                let newString = `, $${index}`
                country = [country.slice(0, i + shift), newString, country.slice(i + shift)].join('');
            }
            index++
            filter.push(`${l[1]};${l[0]}`)
        } else if (l.length === 1) { //continent
            if (continent === '') {
                continent = `ARRAY [$${index}] && (array_agg(continent_name)) `
            } else {
                let i = continent.lastIndexOf("$")
                let newString = `, $${index}`
                continent = [continent.slice(0, i + shift), newString, continent.slice(i + shift)].join('');
            }
            index++
            filter.push(`${l[0]}`)
        } else {
            if (city === '') {
                country = `ARRAY [$${index}] && (array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name)) `
            } else {
                let i = city.lastIndexOf("$")
                let newString = `, $${index}`
                city = [city.slice(0, i + shift), newString, city.slice(i + shift)].join('');
            }
            index++
            city += `${l[3]};${l[2]};${l[1]};${l[0]}`
        }
    }

    //now build query string
    if (city !== '') {
        queryString += city
    }
    if (state !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + state
        } else {
            queryString += state
        }
    }
    if (country !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + country
        } else {
            queryString += country
        }
    }
    if (continent !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + continent
        } else {
            queryString += continent
        }
    }
    if (queryString !== '') {
        queryString = `HAVING ${queryString}`
    }
    return {queryString: queryString, filter: filter}
}

const buildGenreQuery = function (genres) {
    let genre = ''
    let sub_genre = ''
    let queryString = ``
    let filter = []
    let index = 1;

    for (let i = 0; i < genres.length; i++) {
        let g = genres[i].split(';')
        let shift = 2
        if (index > 10) {
            shift = 3
        } else if (index > 100) {
            shift = 4
        }

        if (g.length === 2) { //user selected a sub genre
            if (sub_genre === '') {
                sub_genre = `ARRAY [$${index}] && (array_agg(sub_genre_name || ';' || genre_name )) `
            } else {
                let i = sub_genre.lastIndexOf("$")
                let newString = `, $${index}`
                sub_genre = [sub_genre.slice(0, i + shift), newString, sub_genre.slice(i + shift)].join('');
            }
            index++
            filter.push(`${g[1]};${g[0]}`)
        } else {
            if (genre === '') {
                genre = `ARRAY [$${index}] && (array_agg(genre_name )) `
            } else {
                let i = genre.lastIndexOf("$")
                let newString = `, $${index}`
                genre = [genre.slice(0, i + shift), newString, genre.slice(i + shift)].join('');
            }
            index++
            filter.push(`${g[0]}`)
        }
    }
    //now build query string
    if (genre !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + genre
        } else {
            queryString += genre
        }
    }
    if (sub_genre !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + sub_genre
        } else {
            queryString += sub_genre
        }
    }

    if (queryString !== '') {
        queryString = `HAVING ${queryString}`
    }
    return {queryString: queryString, filter: filter}
}

const buildProfessionQuery = function (professions) {
    let profession = ''
    let sub_profession = ''
    let queryString = ``
    let filter = []
    let index = 1;

    for (let i = 0; i < professions.length; i++) {
        let p = professions[i].split(';')
        let shift = 2
        if (index > 10) {
            shift = 3
        } else if (index > 100) {
            shift = 4
        }

        if (p.length === 2) { //user selected a sub genre
            if (sub_profession === '') {
                sub_profession = `ARRAY [$${index}] && (array_agg(sub_profession_name || ';' || profession_name )) `
            } else {
                let i = sub_profession.lastIndexOf("$")
                let newString = `, $${index}`
                sub_profession = [sub_profession.slice(0, i + shift), newString, sub_profession.slice(i + shift)].join('');
            }
            index++
            filter.push(`${p[1]};${p[0]}`)
        } else {
            if (profession === '') {
                profession = `ARRAY [$${index}] && (array_agg(profession_name )) `
            } else {
                let i = profession.lastIndexOf("$")
                let newString = `, $${index}`
                profession = [profession.slice(0, i + shift), newString, profession.slice(i + shift)].join('');
            }
            index++
            filter.push(`${p[0]}`)
        }
    }
    //now build query string
    if (profession !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + profession
        } else {
            queryString += profession
        }
    }
    if (sub_profession !== '') {
        if (queryString !== '') {
            queryString = queryString + ` OR ` + sub_profession
        } else {
            queryString += sub_profession
        }
    }

    if (queryString !== '') {
        queryString = `HAVING ${queryString}`
    }
    return {queryString: queryString, filter: filter}
}


module.exports = {
    checkUserSessionExpired,
    createToken,
    buildLocationQuery,
    buildGenreQuery,
    buildProfessionQuery,
    combineMembers
};
