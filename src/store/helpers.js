//want currentTab to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        currentTab: null,
        admin: null,
    }
}

module.exports = {
    getDefaultState
};