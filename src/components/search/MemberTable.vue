<template>
  <div>
    <b-table hover :items="members" :fields="computedFields" class="member-search-results">
      <template #cell(liked)="data">
        <div class="followed">
          <b-heart-fill v-if="data.item.followed"></b-heart-fill>
          <b-heart v-else></b-heart>
        </div>
      </template>
      <template #cell(name)="data">
        <div class="primary-text">{{ data.item.alias1 }}</div>
        <div class="secondary-text">
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
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

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
      showHearts: false
    };
  },
  mounted() {
    this.SET_FILTERED_MEMBERS([])
    if (this.authenticated) {
      this.showHearts = true
    }
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated
    }),
    computedFields() {
      return this.showHearts ? this.fields : this.fields.filter(row => row.key !== 'liked');
    },
  },
  methods: {
    ...mapMutations({
      SET_FILTERED_MEMBERS: 'search/SET_FILTERED_MEMBERS'
    })
  }
};
</script>

<style lang="sass" scoped>
.primary-text
  font-size: 13px

.secondary-text
  font-size: 10px

.genre
  background-color: #36fbf6
  padding-left: 2px
  padding-right: 2px

.profession
  background-color: lightcyan
  padding-left: 2px
  padding-right: 2px
</style>

<style lang="sass">
.member-search-results
  td
    width: 50px

  td + td
    width: calc((100% / 4))
</style>