const SET_MOBILE = (state, isMobile) => {
    state.isMobile = isMobile
}

const SET_TABLET = (state, isTablet) => {
    state.isTablet = isTablet
}

const SET_PAGE= (state, currentPage) => {
    state.currentPage = currentPage
}

export default {
    SET_MOBILE,
    SET_PAGE,
    SET_TABLET
}