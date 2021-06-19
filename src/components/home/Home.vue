<template>
  <b-container fluid="xl">
    <div v-if="$store.state.isMobile">mobile screen</div>
    <HomeDesktop v-else />
  </b-container>
</template>

<script>
import HomeDesktop from "./desktop/HomeDesktop"
import {mapMutations} from "vuex";

export default {
  components: {
    HomeDesktop
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE('home')
  }
};
</script>
