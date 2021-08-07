<template>
  <div>
    <Header/>
    <b-container class="mt-5 f-body-container">
      <b-row>
        <b-col cols="4">
          <SideFilter/>
        </b-col>
        <b-col cols="8">
          <b-row v-if="returnedMembers === 0 && !filterApplied">
            <b-col cols="12">use filters to the right to find members</b-col>
            <b-col cols="12" v-if="!authenticated">log in to see more information about members</b-col>
          </b-row>
          <b-row v-else>
            <b-col cols="12" class="text-left" v-if="filterApplied && returnedMembers === 0">no members found using the applied filters. try adjusting your search.</b-col>
            <div v-else>
              <b-col cols="12" class="text-left">showing {{returnedMembers}} results</b-col>
              <MemberTable/>
            </div>

          </b-row>
        </b-col>
      </b-row>
      <AutoCompleteCities/>
    </b-container>
  </div>
</template>

<script>
import SideFilter from "./SideFilter";
import MemberTable from "./MemberTable";
import AutoCompleteCities from "../blog/AutoCompleteCities.vue";
import Header from "@/components/header/Header";
import {mapMutations, mapState} from "vuex";

export default {
  components: {
    SideFilter,
    MemberTable,
    AutoCompleteCities,
    Header,
  },
  data() {
    return {
      returnedMembers: 0
    }
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated,
      filterApplied: (state) => state.search.filterApplied
    }),
  },
  watch: {
    members() {
      this.returnedMembers = this.members.length
    }
  },
  mounted() {
    this.SET_PAGE("search");
    console.log(this.returnedMembers)
  }
};
</script>