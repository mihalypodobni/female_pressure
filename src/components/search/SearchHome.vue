<template>
  <b-container class="body-container mt-3">
    <div>member search</div>
    <MemberSearch />
    <div>genres</div>
    <treeselect v-model="genre" :multiple="true" :options="Object.values(filterData['genres'])" />
    <div class="mt-2">professions</div>
    <treeselect v-model="profession" :multiple="true" :options="Object.values(filterData['professions'])" />
    <div class="mt-2">cities</div>
    <treeselect v-model="location" :multiple="true" :options="Object.values(filterData['cities'])" />

  </b-container>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import MemberSearch from "./MemberSearch";
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {mapState} from "vuex";

export default {
  components: {
    Treeselect,
    MemberSearch
  },
  computed: {
    ...mapState('search', ['filterData']),
  },
  data() {
    return {
      // define the default value
      genre: null,
      profession: null,
      location: null
    }
  },
}
</script>