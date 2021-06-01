import helpers from './helpers'

const LOGIN = (state, userData) => {
    state.user = userData.user
    state.jwt = userData.token
    state.authenticated = userData.auth
    state.admin = userData.admin
};

const LOGOUT = (state) => {
    Object.assign(state, helpers.getDefaultState())
};

const SET_TOKEN = (state, token) => {
    state.jwt = token
};


export default {
    LOGIN,
    LOGOUT,
    SET_TOKEN
};

