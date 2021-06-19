<template>
  <div>
    <b-table hover :items="members.locations" :fields="fields">
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
    </b-table>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
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
          key: "work field",
          label: "work field",
          sortable: false,
        },
        {
          key: "genre",
          label: "genre",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
    }),
  },
  mounted() {
    // this.loadMembers()
  },
  methods: {
    ...mapActions({
      loadMembers: "search/filterData",
    }),
    async loadPostTable() {
      const body = {
        genres: [
          {
            name: "techno",
            type: "sub",
          },
          {
            name: "house",
            type: "main",
          },
        ],
        professions: [],
        other: [],
        locations: [
          {
            continent: "Europe",
            country: "Germany",
            state: "Berlin",
            city: "Berlin",
          },
          {
            continent: "North America",
            country: "United States",
            state: "California",
            city: "San Francisco",
          },
          {
            continent: "South America",
            country: "",
            state: "",
            city: "",
          },
        ],
      };
      await Vue.prototype.$http
        .post(`${Vue.prototype.$hostname}/search/load-table`, body)
        .then(
          (response) => {
            console.log("testing", response.data);
            response.data ? (this.users = response.data) : (this.users = []);
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style lang="sass" scoped>
.primary-text
  font-size: 13px

.secondary-text
  font-size: 10px
</style>