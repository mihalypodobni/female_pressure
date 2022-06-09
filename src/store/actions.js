import Vue from "vue";

const getMemberCount = ({commit}) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${Vue.prototype.$hostname}/search/members-in-database`)
            .then((res) => {
                commit('SET_MEMBER_NUMBER', res.data.member_count)
                resolve();
            }, error => {
                reject(error);
            })
    })
}

export default {
    getMemberCount
}