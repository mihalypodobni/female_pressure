const SET_MOBILE = (state, isMobile) => {
    console.log("setting mobile", isMobile)
    state.isMobile = isMobile
}

const SET_TABLET = (state, isTablet) => {
    console.log("setting tablet", isTablet)
    state.isTablet = isTablet
}

const SET_PAGE= (state, currentPage) => {
    state.currentPage = currentPage
}

export default {
    SET_MOBILE,
    SET_TABLET,
    SET_PAGE
}