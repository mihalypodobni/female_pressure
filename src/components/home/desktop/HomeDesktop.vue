<template>
  <div class="home-body">
    <Header>
      female pressure
      <template #subtitle>
        database of people operating in electronic music
      </template>
    </Header>
    <b-container class="mt-5 f-body-container">
      <b-link @click="$router.push('/explore')">
        Explore member globe
      </b-link>
    </b-container>
<!--    <b-img src="@/assets/other_photos/sample_globe.svg" />-->
  </div>
</template>

<script>
import Header from "@/components/header/Header"

export default {
  components: {
    Header
  },
}
</script>

<style lang="sass" scoped>
//.home-body
//  background-image: url('~@/assets/other_photos/sample_globe.svg');
//
//  /* Full height */
//  height: 100%
//
//  /* Center and scale the image nicely */
//  background-position: center
//  background-repeat: no-repeat
//  background-size: cover
</style>