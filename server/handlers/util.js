const config = require('../config');
const Crypto = require('../handlers/crypto');
const jwt = require("jsonwebtoken");
const _ = require("lodash")

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

const combineMembers = function (locations, genres) {
    let map = new Map(genres.map(o => [o['alias1'], o]));
    return locations.reduce((acc, o) => {
        let match = map.get(o['alias1']);
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
        if (l.length === 3) { //continent;country;state
            if (state === '') {
                state = `ARRAY [$${index}] && (array_agg(state_long_name || ';' || country_name || ';' || continent_name)) `
            } else {
                let i = state.lastIndexOf("$")
                let newString = `, $${index}`
                state = [state.slice(0, i + 2), newString, state.slice(i + 2)].join('');
            }
            index++
            filter.push(`${l[2]};${l[1]};${l[0]}`)
        } else if (l.length === 2) { //continent;country
            if (country === '') {
                country = `ARRAY [$${index}] && (array_agg(country_name || ';' || continent_name)) `
            } else {
                let i = country.lastIndexOf("$")
                let newString = `, $${index}`
                country = [country.slice(0, i + 2), newString, country.slice(i + 2)].join('');
            }
            index++
            filter.push(`${l[1]};${l[0]}`)
        } else if (l.length === 1) { //continent
            if (continent === '') {
                continent = `ARRAY [$${index}] && (array_agg(continent_name)) `
            } else {
                let i = continent.lastIndexOf("$")
                let newString = `, $${index}`
                continent = [continent.slice(0, i + 2), newString, continent.slice(i + 2)].join('');
            }
            index++
            filter.push(`${l[0]}`)
        } else {
            if (city === '') {
                country = `ARRAY [$${index}] && (array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name)) `
            } else {
                let i = city.lastIndexOf("$")
                let newString = `, $${index}`
                city = [city.slice(0, i + 2), newString, city.slice(i + 2)].join('');
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
        if (g.length === 2) { //user selected a sub genre
            if (sub_genre === '') {
                sub_genre = `ARRAY [$${index}] && (array_agg(sub_genre_name || ';' || genre_name )) `
            } else {
                let i = sub_genre.lastIndexOf("$")
                let newString = `, $${index}`
                sub_genre = [sub_genre.slice(0, i + 2), newString, sub_genre.slice(i + 2)].join('');
            }
            index++
            filter.push(`${g[1]};${g[0]}`)
        } else {
            if (genre === '') {
                genre = `ARRAY [$${index}] && (array_agg(genre_name )) `
            } else {
                let i = genre.lastIndexOf("$")
                let newString = `, $${index}`
                genre = [genre.slice(0, i + 2), newString, genre.slice(i + 2)].join('');
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


module.exports = {
    checkUserSessionExpired,
    createToken,
    buildLocationQuery,
    buildGenreQuery,
    combineMembers
};
