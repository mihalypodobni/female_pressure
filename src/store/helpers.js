//want currentPage to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        isTablet: false,
        currentPage: 'home'
    }
}

module.exports = {
    getDefaultState
};