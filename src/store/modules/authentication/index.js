import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import helpers from './helpers'


export default {
    state: helpers.getDefaultState,
    actions,
    mutations,
    getters
}