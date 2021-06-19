<template>
  <div v-if="filterData !== []">
    <MemberSearch />
    <treeselect
      v-model="location"
      :multiple="true"
      :options="Object.values(filterData['cities'])"
      @input="input($event)"
      placeholder="location"
      class="my-3"
    />
    <treeselect
      v-model="profession"
      :multiple="true"
      :options="Object.values(filterData['professions'])"
      @input="input($event)"
      placeholder="work field"
      class="my-3"
    />
    <treeselect
      v-model="genre"
      :multiple="true"
      :options="Object.values(filterData['genres'])"
      @input="input($event)"
      placeholder="genre"
      class="my-3"
    />
    <treeselect
      v-model="other"
      :multiple="true"
      :options="Object.values(filterData['other'])"
      placeholder="other"
      @input="input($event)"
      class="my-3"
    />
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import MemberSearch from "./MemberSearch";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: {
    Treeselect,
    MemberSearch,
  },
  computed: {
    ...mapState("search", ["filterData"]),
  },
  methods: {
    ...mapActions({
      loadMembers: "search/filterData",
    }),
    ...mapMutations({
      SET_FILTERED_MEMBERS: "search/SET_FILTERED_MEMBERS", // map `this.add()` to `this.$store.commit('increment')`
    }),
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        if (
          this.selectedFilters.location.length === 0 &&
          this.selectedFilters.profession.length === 0 &&
          this.selectedFilters.genre.length === 0 &&
          this.selectedFilters.other.length === 0
        ) {
          console.log("clearing filtered members list");
          this.SET_FILTERED_MEMBERS([]);
        } else {
          this.loadMembers(this.selectedFilters);
        }
      },
    },
  },
  data() {
    return {
      // define the default value
      genre: [],
      profession: [],
      location: [],
      other: [],
    };
  },
};
</script>