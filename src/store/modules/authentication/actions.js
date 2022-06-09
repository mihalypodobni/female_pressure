import Vue from 'vue';

const login = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.post(`${Vue.prototype.$hostname}/auth/login`, {
            email: data.email,
            password: data.password
        })
            .then(response => {
                console.log("response", response)
                commit('LOGIN', {
                    user: response.data.user[0].email,
                    jwt: response.data.token,
                    auth: response.data.auth,
                    admin: response.data.admin
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