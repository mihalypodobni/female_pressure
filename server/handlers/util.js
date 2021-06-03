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
module.exports = {
    checkUserSessionExpired,
    createToken
};
