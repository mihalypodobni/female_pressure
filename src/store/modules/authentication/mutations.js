import helpers from './helpers'

const LOGIN = (state, userData) => {
    state.user = userData.user
    state.jwt = userData.jwt
    state.authenticated = userData.auth
};

const LOGOUT = (state) => {
    console.log("logging out")
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

