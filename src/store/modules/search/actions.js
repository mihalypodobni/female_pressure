import Vue from "vue";

const loadFilterData = ({commit}) => {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${Vue.prototype.$hostname}/search/filter-data`, {})
            .then(response => {
                response.data['other'] = [
                    {
                        id: 'remote',
                        label: 'work remotely'
                    },
                    {
                        id: 'liked',
                        label: 'like profiles only'
                    },
                    {
                        id: 'deceased',
                        label: 'deceased member'
                    },
                ]
                commit('SET_FILTER_DATA', response.data)
                resolve();
            }, error => {
                reject(error);
            })
    })
};

const filterData = ({commit}, selectedFilters) => {
    console.log("filtering data", selectedFilters)
    const body = {
        genres: [
            {
                name: 'techno',
                type: 'sub'
            },
            {
                name: 'house',
                type: 'main'
            },
        ],
        professions: [],
        other: [],
        locations: [
            {
                continent: 'Europe',
                country: 'Germany',
                state: 'Berlin',
                city: 'Berlin'
            },
            {
                continent: 'North America',
                country: 'United States',
                state: 'California',
                city: 'San Francisco'
            },
            {
                continent: 'South America',
                country: '',
                state: '',
                city: ''
            }
        ]
    }
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.post(`${Vue.prototype.$hostname}/search/load-table`, body)
            .then(response => {
                commit('SET_SELECTED_FILTERS', response.data)
                resolve();
            }, error => {
                reject(error);
            })
    })
};

export default {
    loadFilterData,
    filterData
}