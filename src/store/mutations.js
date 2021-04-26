const SET_MOBILE = (state, isMobile) => {
    state.isMobile = isMobile
}

const SET_TAB = (state, currentTab) => {
    state.currentTab = currentTab
}

export default {
    SET_MOBILE,
    SET_TAB
}