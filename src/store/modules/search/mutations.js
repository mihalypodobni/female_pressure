const SET_FILTER_DATA = (state, filterData) => {
    state.filterData = filterData
};

const SET_SELECTED_FILTERS = (state, data) => {
    state.selectedFilters = data
};

const SET_SELECTED_MEMBER = (state, member) => {
    state.selectedMember = member
}

export default {
    SET_FILTER_DATA,
    SET_SELECTED_FILTERS,
    SET_SELECTED_MEMBER
};