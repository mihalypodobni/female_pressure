<template>
  <div>
    <Header>
      search
    </Header>
    <b-container class="mt-5 px-4 px-lg-0  f-body-container">
      <b-row>
        <b-col v-if="!isMobile" cols="4">
          <SideFilter/>
        </b-col>
        <b-col v-else cols="12" class="pb-3 pl-4">
          <b-row>
            <b-col cols="auto" v-b-toggle.sidebar-filter class="toggle-filter-div p-1">
              <font-awesome-icon  icon="filter" class="mx-2 toggle-filter-icon" />
            </b-col>
            <b-col class="my-auto">
              {{returnedMembers}} members returned
            </b-col>
          </b-row>
          <b-sidebar id="sidebar-filter"
                     title="Filter & Find Members"
                     backdrop
          >
            <SideFilter />
          </b-sidebar>
        </b-col>
        <b-col cols="12" md="8" >
          <b-row v-if="returnedMembers === 0 && !filterApplied">
            <b-col cols="12" class="user-message px-0">use filters to the left to search for members</b-col>
            <hr class="w-100 m-1 horizontal-line">
            <b-col cols="12" v-if="!authenticated" class="px-0">log in to see more information about members</b-col>
          </b-row>
          <b-row v-else>
            <b-col cols="12" class="text-left user-message px-0" v-if="filterApplied && returnedMembers === 0">no members found using the applied filters. try adjusting your search.</b-col>
            <div v-else>
              <b-col v-if="!isMobile" cols="12" class="text-left user-message px-0">showing {{returnedMembers}} results</b-col>
              <member-table-mobile v-if="isMobile"/>
              <member-table class="pr-2" v-else/>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideFilter from "./SideFilter";
import MemberTable from "./MemberTable";
import MemberTableMobile from "./MemberTableMobile";
import Header from "@/components/header/HeaderComp";
import {mapState} from "vuex";

export default {
  components: {
    SideFilter,
    MemberTable,
    MemberTableMobile,
    Header,
  },
  data() {
    return {
      returnedMembers: 0
    }
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated,
      filterApplied: (state) => state.search.filterApplied,
      isTablet: (state) => state.isTablet,
      isMobile: (state) => state.isMobile
    }),
  },
  watch: {
    members() {
      this.returnedMembers = this.members.length
    }
  }
};
</script>

<style lang="sass" scoped>
.user-message
  line-height: 38px

.horizontal-line
  border-top: 2px solid #2afec7

.toggle-filter-div
  background-color: #2ffddb

.toggle-filter-icon
  &:hover
    cursor: pointer
  &:focus
    outline: none!important
</style>