import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import helpers from './helpers'


export default {
    namespaced: true,
    state: helpers.getDefaultState,
    actions,
    mutations,
    getters
}