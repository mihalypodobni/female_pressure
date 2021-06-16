<template>
  <b-container class="body-container">
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
</template>

<script>
import SideFilter from "./SideFilter"
import MemberTable from "./MemberTable"
import AutoCompleteCities from "../util/AutoCompleteCities";

export default {
  components: {
    SideFilter,
    MemberTable,
    AutoCompleteCities
  }
}
</script>