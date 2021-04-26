<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  created() {
    this.$store.commit('SET_MOBILE', window.innerWidth < 1100)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window = window.innerWidth
      this.window < 1100 ?
          this.$store.commit('SET_MOBILE', true) :
          this.$store.commit('SET_MOBILE', false)
    }
  }
}
</script>

<style lang="sass">
#app
  height: 100vh
  width: 100vw
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

</style>
