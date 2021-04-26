//want currentTab to only persist state until browser is closed
const getDefaultState = () => {
    return {
        isMobile: false,
        currentTab: null,
    }
}

module.exports = {
    getDefaultState
};