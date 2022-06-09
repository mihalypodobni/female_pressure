<template>
  <div class="test">
    <b-table hover
             :items="members"
             :fields="computedFields"
             @row-clicked="selectMember($event)"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-compare="sortingChanged"
             :current-page="currentPage"
             :per-page="perPage"
             no-sort-reset
             tbody-tr-class="member-row"
             class="member-search-results"
    >
      <template #cell(liked)="data">
        <div class="followed">
          <b-button variant="link" class="heart-button p-0"
                    @click="toggleLike({email: data.item.email, currentlyFollowing: data.item.followed})">
            <b-icon-heart-fill v-if="data.item.followed"></b-icon-heart-fill>
            <b-icon-heart v-else></b-icon-heart>
          </b-button>
        </div>
      </template>
      <template #cell(name)="data">
        <div class="primary-text">{{ data.item.alias1 }}</div>
        <div class="alias secondary-text font-weight-bold">
          {{ data.item.alias2 }}
          <span v-if="data.item.alias3 !== null">, </span>
          {{ data.item.alias3 }}
        </div>
      </template>
      <template #cell(location)="data">
        <div class="primary-text">
          {{ data.item.location[0].split(";")[0] }} -
          {{ data.item.location[0].split(";")[2] }}
        </div>
        <div v-if="data.item.location.length > 1" class="secondary-text">
          {{ data.item.location[1].split(";")[0] }} -
          {{ data.item.location[1].split(";")[2] }}
        </div>
      </template>
      <template #cell(genre)="data">
        <div>
          <span v-for="(genre, idx) in data.item.genres"
                :key="genre + idx"
                class="primary-text genre mr-1"
          >
            {{ genre }}
          </span>
        </div>
      </template>
      <template #cell(workField)="data">
        <div>
          <span v-for="(profession, idx) in data.item.professions"
                :key="profession + idx"
                class="primary-text profession mr-1"
          >
            {{ profession }}
          </span>
        </div>
      </template>
    </b-table>
    <b-row v-if="members.length > 0" class="justify-content-center">
      <b-col cols="auto" class="my-1">
        <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0 pagination"
            page-class="page-styling"
        >
          <template #first-text><b-icon-chevron-double-left /></template>
          <template #prev-text><b-icon-chevron-left /></template>
          <template #next-text><b-icon-chevron-right /></template>
          <template #last-text><b-icon-chevron-double-right /></template>
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      fields: [
        {
          key: "liked",
          label: ""
        },
        {
          key: "name",
          label: "name",
          sortable: true,
        },
        {
          key: "location",
          label: "location",
          sortable: true,
        },
        {
          key: "workField",
          label: "work field",
          sortable: false,
        },
        {
          key: "genre",
          label: "genre",
          sortable: false,
        },
      ],
      showHearts: false,
      sortBy: "name",
      sortDesc: null,
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    };
  },
  mounted() {
    this.showHearts = this.authenticated
    this.SET_FILTER_APPLIED(false)
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated,
    }),
    computedFields() {
      return this.showHearts ? this.fields : this.fields.filter(row => row.key !== 'liked');
    },
  },
  watch: {
    members() {
      this.totalRows = this.members.length
    }
  },
  methods: {
    ...mapMutations({
      SET_SELECTED_MEMBER: 'search/SET_SELECTED_MEMBER',
      SET_FILTER_APPLIED: 'search/SET_FILTER_APPLIED'
    }),
    ...mapActions({
      toggleLike: 'search/toggleLike'
    }),
    selectMember(e) {
      this.SET_SELECTED_MEMBER(e.email)
      this.$router.push('/user/' + e.alias1)
    },
    sortingChanged(a, b, key) {
      switch (key) {
        case 'name': {
          let nameA = a.alias1.toLowerCase()
          let nameB = b.alias1.toLowerCase()
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
        }
        case 'location': {
          let A = a.location[0]
          let B = b.location[0]
          return A < B ? -1 : A > B ? 1 : 0
        }
        default:
          return false
      }
    },
  }
};
</script>

<style lang="sass" scoped>
.member-search-results ::deep th
  border-bottom: 2px solid #2afec5
  border-top: 2px solid #2afec5

.member-search-results ::deep td
  border-bottom: 2px solid $searchBorder

.primary-text
  font-size: 13px

.secondary-text
  font-size: 10px

.alias
  color: #36fbf6

.genre
  background-color: #36fbf6
  padding-left: 2px
  padding-right: 2px

.profession
  background-color: #2afec5
  padding-left: 2px
  padding-right: 2px

.heart-button
  color: #4be18d
  &:hover
    transform: scale(1.15)
    transition: transform .1s ease-in-out
    cursor: pointer
  &:active
    transform: scale(1)
    transition-property: transform
    transition-duration: 0.15s
    transition-timing-function: cubic-bezier(0, .62, .46, 2.03)
  &:focus
    outline: none !important
    box-shadow: none !important
</style>

<style lang="sass">
.member-row
  height: 130px!important

.member-search-results
  td
    width: 55px
  tr
    cursor: pointer
  td + td
    width: calc((100% / 4))

.page-item.active .page-link
  color: black
  background: transparent
  flex-grow: 0!important
  width: 30px

.page-item.disabled .page-link
  color: lightgrey
  flex-grow: 0!important
  background: transparent
  width: 30px

.page-item .page-link
  color: darkcyan
  flex-grow: 0!important
  width: 30px
  border: none
  background-color: transparent
  margin-left: 5px
  margin-right: 5px

</style>
