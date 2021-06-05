const config = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_LIFE: 60 * 5, //5 minutes
    USER_SESSION_EXPIRATION: 1000 * 60 * 60 // 60 minutes
};

module.exports = config;
