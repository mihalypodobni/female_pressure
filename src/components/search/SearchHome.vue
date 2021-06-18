<template>
  <div>
    <Header />
    <b-container class="mt-5 body-container">
      <b-row>
        <b-col cols="4">
          <SideFilter />
        </b-col>
        <b-col cols="8">
          <MemberTable />
        </b-col>
      </b-row>
      <AutoCompleteCities />
    </b-container>
  </div>
</template>

<script>
import SideFilter from "./SideFilter"
import MemberTable from "./MemberTable"
import AutoCompleteCities from "../util/AutoCompleteCities";
import Header from "@/components/header/Header"
import {mapMutations} from "vuex";

export default {
  components: {
    SideFilter,
    MemberTable,
    AutoCompleteCities,
    Header
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE('search')
  }
}
</script>