const getDefaultState = () => {
	return {
		filterData: [],
		filteredMembers: [],
		selectedMember: null,
		filterApplied: false
	};
};

module.exports = {
	getDefaultState,
};
