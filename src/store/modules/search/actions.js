import Vue from "vue";

const loadFilterData = ({commit}) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${Vue.prototype.$hostname}/search/filter-data`, {})
            .then(response => {
                console.log("response", response)
                commit('SET_FILTER_DATA', response.data)
                resolve();
            }, error => {
                reject(error);
            })
    })
};

export default {
    loadFilterData
}