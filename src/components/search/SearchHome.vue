<template>
  <b-container class="body-container mt-3">
    <treeselect v-model="value" :multiple="true" :options="filterData" />
  </b-container>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {mapState} from "vuex";

export default {
  components: {
    Treeselect
  },
  computed: {
    ...mapState('search', ['filterData']),
  },
  data() {
    return {
      // define the default value
      value: null,
    }
  },
}
</script>