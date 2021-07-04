const SET_FILTER_DATA = (state, filterData) => {
	state.filterData = filterData;
};

const SET_FILTERED_MEMBERS = (state, data) => {
	data === 0 ? state.filteredMembers = [] : state.filteredMembers = data;
};

const SET_SELECTED_MEMBER = (state, member) => {
	state.selectedMember = member;
};

const SET_FILTER_APPLIED = (state, applied) => {
	state.filterApplied = applied;
};

const SET_TOGGLED_MEMBER = (state, toggledMember) => {
	const index = state.filteredMembers.findIndex(item => item.email === toggledMember);
	state.filteredMembers[index].followed = !state.filteredMembers[index].followed

}

export default {
	SET_FILTER_DATA,
	SET_FILTERED_MEMBERS,
	SET_SELECTED_MEMBER,
	SET_TOGGLED_MEMBER,
	SET_FILTER_APPLIED
};
