const config = require('../config');

const checkUserSessionExpired = function (tokenCreationDate) {
    let aWeekAgo = Date.now() - config.USER_SESSION_EXPIRATION;
    return tokenCreationDate < aWeekAgo
}

module.exports = {
    checkUserSessionExpired
};
