<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer class="footer"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Navigation from "./components/navigation/Navigation";
import Footer from  "./components/footer/Footer"

export default {
  data() {
    return {
      window: {
        width: 0,
        breakpointWidth: 768
      }
    }
  },
  components: {
    Navigation,
    Footer
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
      this.window < 1024 ?
          this.SET_MOBILE(true) :
          this.SET_MOBILE(false)
    }
  }
}
</script>

<style lang="sass">
#app
  min-height: 100vh
  width: 100vw
  display: flex
  flex-direction: column
  font-family: $font-main
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  @include background-gradient

</style>

<style lang="sass" scoped>
.footer
  margin-top: auto

#app /deep/ .body-container
  max-width: $body-max-width
</style>
