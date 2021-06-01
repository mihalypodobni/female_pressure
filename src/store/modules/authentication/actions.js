const login = ({commit}, authData) => {
    return new Promise((resolve, reject) => {
        authData.vm.$http.post(`${authData.vm.$hostname}/auth/login`, {
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

const verify = (authData) => {
    console.log("verifying user", authData)
    return new Promise((resolve, reject) => {
        authData.vm.$http.get(`${authData.vm.$hostname}/auth/verify`)
            .then(() => {
                resolve();
            }, error => {
                reject(error);
            })
    })
};


export default {
    login,
    verify
}