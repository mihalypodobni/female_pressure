<template>
  <b-container fluid="xl">
    {{$store.state.isMobile}}
    <div v-if="$store.state.isMobile">mobile screen</div>
    <HomeDesktop v-else />
  </b-container>
</template>

<script>
import HomeDesktop from "./desktop/HomeDesktop"

export default {
  components: {
    HomeDesktop
  },
};
</script>
