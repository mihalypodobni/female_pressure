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
import {mapActions, mapState, mapMutations} from "vuex";

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
    ...mapMutations({
      SET_FILTERED_MEMBERS: 'search/SET_FILTERED_MEMBERS'
    })
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        if (this.selectedFilters.location.length === 0 && this.selectedFilters.profession.length === 0 && this.selectedFilters.genre.length === 0 && this.selectedFilters.other.length === 0) {
          this.SET_FILTERED_MEMBERS([])
        } else {
          this.loadMembers(this.selectedFilters)
        }
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