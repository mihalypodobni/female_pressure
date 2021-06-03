const getDefaultState = () => {
    return {
        jwt: null,
        authenticated: false,
        admin: false,
    }
}

module.exports = {
    getDefaultState
};
