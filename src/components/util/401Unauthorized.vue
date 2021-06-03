<template>
  <b-container class="body-container mt-3">
    You are trying to access a page that don't have permission to access
  </b-container>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  beforeMount() {
    this.SET_PAGE('401')
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  }

}
</script>