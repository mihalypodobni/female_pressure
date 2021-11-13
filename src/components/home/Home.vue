<template>
  <b-container fluid="xl">
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
    </div>
  </b-container>
</template>

<script>
import Header from "@/components/header/Header"
import {mapActions} from 'vuex'

export default {
  components: {
    Header
  },
  methods: {
    ...mapActions({
      getMemberCount: 'getMemberCount' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },
  created() {
    this.getMemberCount()
  }
};
</script>
