//want currentPage to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        currentPage: 'home',
        admin: null,
    }
}

module.exports = {
    getDefaultState
};