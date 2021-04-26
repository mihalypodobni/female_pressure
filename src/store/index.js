import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import helpers from './helpers';

const vuexStorage = new VuexPersist({
    key: 'portal',
    storage: localStorage,
})

const store = new Vuex.Store({
    plugins: [vuexStorage.plugin],
    state: helpers.getDefaultState,
    mutations,
    actions,
    getters
})

export default store;