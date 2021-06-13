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
  methods: {
    input(value, instanceID) {
      console.log("here is an input", value, instanceID)
      console.log("genre", this.genre)
      console.log("profession", this.profession)
      console.log("location", this.location)
      console.log("other", this.other)
    },
  },
  data() {
    return {
      // define the default value
      genre: [],
      profession: [],
      location: [],
      other: []
    }
  },
}
</script>