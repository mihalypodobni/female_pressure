<template>
  <div v-if="filterData !== []">
    <MemberSearch/>
    <treeselect
        v-model="selectedFilters.location"
        :multiple="true"
        :options="Object.values(filterData['cities'])"
        placeholder="location"
        :showCount="true"
        @open="openFilter = 'location'"
        @close="openFilter = ''"    
        :class="openFilter === 'location' ? 'open-filter' : 'close-filter'"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.profession"
        :multiple="true"
        :options="Object.values(filterData['professions'])"
        placeholder="work field"
        @open="openFilter = 'profession'"
        @close="openFilter = ''"
        :class="openFilter === 'profession' ? 'open-filter' : 'close-filter'"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.genre"
        :multiple="true"
        :options="Object.values(filterData['genres'])"
        placeholder="genre"
        @open="openFilter = 'genre'"
        @close="openFilter = ''"
        :class="openFilter === 'genre' ? 'open-filter' : 'close-filter'"
        class="my-3 filter"
    />
    <treeselect
        v-model="selectedFilters.other"
        :multiple="true"
        :options="otherValues"
        placeholder="other"
        @open="openFilter = 'other'"
        @close="openFilter = ''"
        :class="openFilter === 'other' ? 'open-filter' : 'close-filter'"
        class="my-3 filter"
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
  data() {
    return {
      loggedIn: false,
      selectedFilters: {
        genre: [],
        profession: [],
        location: [],
        other: []
      },
      openFilter: ""
    }
  },
  mounted() {
    this.loggedIn = this.authenticated
  },
  computed: {
    ...mapState('search', ['filterData']),
    ...mapState({
      authenticated: (state) => state.authentication.authenticated
    }),
    otherValues() {
      let other = Object.values(this.filterData['other'])
      return this.loggedIn ? other : other.filter(row => row.id !== 'liked');
    },
  },
  methods: {
    ...mapActions({
      loadMembers: 'search/filterData'
    }),
    ...mapMutations({
      SET_FILTERED_MEMBERS: 'search/SET_FILTERED_MEMBERS',
      SET_FILTER_APPLIED: 'search/SET_FILTER_APPLIED'
    })
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        if (this.selectedFilters.location.length === 0 && this.selectedFilters.profession.length === 0 && this.selectedFilters.genre.length === 0 && this.selectedFilters.other.length === 0) {
          this.SET_FILTERED_MEMBERS([])
          this.SET_FILTER_APPLIED(false)
        } else {
          this.loadMembers(this.selectedFilters)
          this.SET_FILTER_APPLIED(true)
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.filter
  /deep/ .vue-treeselect__control
    border: 3px solid #68fded
    border-radius: 0
  /deep/ .vue-treeselect__placeholder
    color: black
  /deep/ .vue-treeselect__control-arrow
    color: black
    height: 11px
    width: 11px
  /deep/ .vue-treeselect__menu
    border: 3px solid #68fded
    border-radius: 0

.open-filter
  /deep/ .vue-treeselect__menu
    border-left: 3px solid #68fded
    border-right: 3px solid #68fded
    border-bottom: 3px solid #68fded
    border-top: none
    -moz-box-shadow: 0 0 10px #ccc
    -webkit-box-shadow: 0 0 10px #ccc
    box-shadow: 0 0 10px #ccc
  /deep/ .vue-treeselect__control
    border-left: 3px solid #68fded
    border-right: 3px solid #68fded
    border-top: 3px solid #68fded
    border-bottom: none
    -moz-box-shadow: 0 0 10px #ccc
    -webkit-box-shadow: 0 0 10px #ccc
    box-shadow: 0 0 10px #ccc
    z-index: 10
</style>