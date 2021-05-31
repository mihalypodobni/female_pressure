//want currentPage to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        currentPage: 'home',
        user: {
            jwt: null,
            authenticated: false,
            admin: null,
        }
    }
}

module.exports = {
    getDefaultState
};