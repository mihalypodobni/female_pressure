//want currentPage to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        isTablet: false,
        memberCount: 0
    }
}

module.exports = {
    getDefaultState
};