const getDefaultState = () => {
    return {
        jwt: null,
        authenticated: false,
        admin: null,
    }
}

module.exports = {
    getDefaultState
};
