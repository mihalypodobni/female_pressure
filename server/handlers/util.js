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

const buildLocationQuery = function (locations) {
    let queryString = ``
    let continent = ''
    let country = ''
    let state = ''
    let city = ''

    //need to build arrays here
    for (let i = 0; i < locations.length; i++) {
        let l = locations[i]
        // console.log(locations[i])
        if (l.city === '' && l.state !== '') {
            state += `${l.state};${l.country};${l.continent}`
        } else if (l.state === '' && l.country !== '') {
            country += `${l.country};${l.continent}`
        } else if (l.country === '' && l.continent !== '') {
            continent += `${l.continent}`
        } else {
            city += `${l.city};${l.state};${l.country};${l.continent}`
        }
    }
    queryString = `HAVING ARRAY ['Berlin;Berlin;Germany;Europe'] &&
               (array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name)) OR
               ARRAY ['United States;North America'] &&
               (array_agg(country_name || ';' || continent_name))`
    return queryString
}
module.exports = {
    checkUserSessionExpired,
    createToken,
    buildLocationQuery
};
