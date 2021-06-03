const getDefaultState = () => {
    return {
        jwt: null,
        authenticated: false,
        admin: false,
        user: null
    }
}

module.exports = {
    getDefaultState
};
