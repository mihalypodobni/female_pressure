const SET_MOBILE = (state, isMobile) => {
    state.isMobile = isMobile
}

const SET_TABLET = (state, isTablet) => {
    state.isTablet = isTablet
}

const SET_MEMBER_NUMBER = (state, number) => {
    state.memberCount = number
}

export default {
    SET_MOBILE,
    SET_TABLET,
    SET_MEMBER_NUMBER
}