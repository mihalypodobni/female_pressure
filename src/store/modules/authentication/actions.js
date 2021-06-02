import Vue from 'vue';

const login = ({commit}, authData) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${Vue.prototype.$hostname}/auth/login`, {
            email: authData.email,
            password: authData.password
        })
            .then(response => {
                commit('LOGIN', {
                    user: response.data.user[0].email,
                    jwt: response.data.token,
                    auth: response.data.auth
                })
                resolve();
            }, error => {
                reject(error);
            })
    })
};

const verify = ({commit}) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${Vue.prototype.$hostname}/auth/verify`)
            .then((response) => {
                resolve(response);
            }, error => {
                commit('LOGOUT')
                reject(error)
            })
    })
};


export default {
    login,
    verify
}