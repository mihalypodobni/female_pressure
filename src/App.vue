<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      window: {
        width: 0,
        breakpointWidth: 768
      }
    }
  },
  created() {
    this.SET_MOBILE(window.innerWidth < this.breakpointWidth)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations([
      'SET_MOBILE'
    ]),
    handleResize() {
      this.window = window.innerWidth
      this.window < 1100 ?
          this.SET_MOBILE(true) :
          this.SET_MOBILE(false)
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
