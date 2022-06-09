const config = require('../config');
const Crypto = require('../handlers/crypto');
const jwt = require("jsonwebtoken");

const checkUserSessionExpired = function (tokenCreationDate) {
    let aWeekAgo = Date.now() - config.USER_SESSION_EXPIRATION;
    return tokenCreationDate < aWeekAgo
}

const createToken = function (data) {
    let jwtDataPayload = {user: data[0].email};
    console.log("util.js createToken " + JSON.stringify(jwtDataPayload));
    let dateOfIssue = new Date()
    let jwtPayload = {"data": jwtDataPayload, "doi": dateOfIssue.getTime()}
    console.log("util.js createToken " + JSON.stringify(jwtPayload));
    let payload = Crypto.encryptObject(jwtPayload)
    console.log("util.js createToken " + JSON.stringify(payload));

    return jwt.sign({payload}, config.ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: config.ACCESS_TOKEN_LIFE,
    })
}

const buildLocationQuery = function (locations, i) {
    let queryString = ``
    let continent = ''
    let country = ''
    let state = ''
    let city = ''
    let filter = []
    let index = i;

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
        queryString = ` HAVING ${queryString}`
    }
    return {queryString: queryString, filter: filter, index: index}
}

const buildGenreQuery = function (genres, i) {
    let genre = ''
    let sub_genre = ''
    let queryString = ``
    let filter = []
    let index = i;

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
    return {queryString: queryString, filter: filter, index: index}
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
    return {queryString: queryString, filter: filter, index: index}
}

const buildOtherQuery = function (other) {
    if (other.length === 0 || other.length === 1 && other.includes('liked')) {
        return ` `
    }
    let queryString = ``
    if (other.includes('liked')) {
        queryString = `AND`
    } else {
        queryString = `WHERE`
    }
    if (other.includes('remote')) {
        queryString += ` m.remote is TRUE `
    }
    if (other.includes('deceased')) {
        if (queryString !== 'WHERE' && queryString !== 'AND') {
            queryString += `and`
        }
        queryString += ` m.deceased is TRUE `
    }
    return queryString
}

const buildFollowingQuery = function (authenticated, user, otherFilters, index) {
    if (!authenticated) {
        return {
            select: ``,
            where: ``,
            filter: []
        }
    }

    let following = {}
    if (otherFilters.includes('liked')) {
        following.select = `true as followed,`
        following.where = `inner join follows f on m.member_id = f.being_followed_id
            where f.follower_id =
            (SELECT member_id from member where email = $${index}) `
    } else {
        following.select = ` (CASE
            WHEN EXISTS(
                    SELECT
                    from (SELECT email
                          from member as m
                                   inner join follows f on m.member_id = f.being_followed_id
                          where f.follower_id =
                                (SELECT member_id from member where email = $${index})) as fav
                    where fav.email = m.email
                )
                THEN true
            ELSE false
           END) as followed,  `
        following.where = ``
    }

    following.filter = [user]
    return following

}


module.exports = {
    checkUserSessionExpired,
    createToken,
    buildLocationQuery,
    buildGenreQuery,
    buildProfessionQuery,
    buildOtherQuery,
    buildFollowingQuery
};
