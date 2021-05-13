const login = ({commit}, authData) => {
    return new Promise((resolve, reject) => {
        authData.vm.$http.post(`${authData.vm.$hostname}/users/login`, {
            email: authData.email,
            password: authData.password
        })
            .then(response => {
                commit('LOGIN', {
                    user: response.data.user[0].email,
                    company: response.data.user[0].company,
                    jwt: response.data.token,
                    admin: response.data.user[0].is_admin,
                    classification: response.data.user[0].classification,
                    dashboard: response.data.user[0].dashboard,
                    orders: response.data.user[0].orders
                })
                resolve();
            }, error => {
                reject(error);
            })
    })
};


export default {
    login
}