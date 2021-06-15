<template>
  <div v-if="filterData !== []">
    <MemberSearch/>
    <treeselect
        v-model="selectedFilters.location"
        :multiple="true"
        :options="Object.values(filterData['cities'])"
        placeholder="location"
        class="my-3"
    />
    <treeselect
        v-model="selectedFilters.profession"
        :multiple="true"
        :options="Object.values(filterData['professions'])"
        placeholder="work field"
        class="my-3"
    />
    <treeselect
        v-model="selectedFilters.genre"
        :multiple="true"
        :options="Object.values(filterData['genres'])"
        placeholder="genre"
        class="my-3"
    />
    <treeselect
        v-model="selectedFilters.other"
        :multiple="true"
        :options="Object.values(filterData['other'])"
        placeholder="other"
        class="my-3"
    />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import MemberSearch from "./MemberSearch";
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {mapActions, mapState} from "vuex";

export default {
  components: {
    Treeselect,
    MemberSearch
  },
  computed: {
    ...mapState('search', ['filterData']),
  },
  methods: {
    ...mapActions({
      loadMembers: 'search/filterData'
    }),
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        console.log("selected filters have changed")
        this.loadMembers(this.selectedFilters)
      }
    }
  },
  data() {
    return {
      selectedFilters: {
        genre: [],
        profession: [],
        location: [],
        other: []
      }
    }
  },
}
</script>