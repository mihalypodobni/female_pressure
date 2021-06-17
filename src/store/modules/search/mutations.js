const SET_FILTER_DATA = (state, filterData) => {
    state.filterData = filterData
};

const SET_FILTERED_MEMBERS= (state, data) => {
    state.filteredMembers = data
};

const SET_SELECTED_MEMBER = (state, member) => {
    state.selectedMember = member
}

export default {
    SET_FILTER_DATA,
    SET_FILTERED_MEMBERS,
    SET_SELECTED_MEMBER
};