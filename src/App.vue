
<template>
  <div id="app">
    <Navigation v-if="!admin"/>
    <router-view/>
    <Footer class="footer" v-if="!admin"/>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import Navigation from "./components/navigation/NavigationHome";
import Footer from "./components/footer/Footer"
export default {
  data() {
    return {
      window: {
        width: 0,
        mobileBreakpoint: 768,
        tabletBreakpoint: 1024
      }
    }
  },
  components: {
    Navigation,
    Footer,
  },
  created() {
    this.SET_MOBILE(window.innerWidth < this.window.mobileBreakpoint)
    this.SET_TABLET(window.innerWidth < this.window.tabletBreakpoint && window.innerWidth >= this.window.mobileBreakpoint)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  mounted() {
    this.loadFilterData()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapState({
      admin: state => state.authentication.admin,
      isMobile: state => state.isMobile,
      isTablet: state => state.isTablet
    }),
  },
  methods: {
    ...mapMutations([
      'SET_MOBILE',
      'SET_TABLET'
    ]),
    ...mapActions({
      loadFilterData: 'search/loadFilterData'
    }),
    handleResize() {
      this.window.width = window.innerWidth
      if (this.window.width < this.window.mobileBreakpoint && !this.isMobile) {
        this.SET_MOBILE(true)
        this.SET_TABLET(false)
      } else if (this.window.width >= this.window.mobileBreakpoint && this.window.width < this.window.tabletBreakpoint && !this.isTablet) {
        this.SET_MOBILE(false)
        this.SET_TABLET(true)
      } else if (this.window.width >= this.window.tabletBreakpoint && (this.isMobile || this.isTablet)) {
        this.SET_MOBILE(false)
        this.SET_TABLET(false)
      }
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
  @media screen and (max-width: 1399px)
    max-width: $body-max-width-medium
  @media screen and (min-width: 1400px)
    max-width: $body-max-width-large
#app /deep/ .header-container
  @media screen and (max-width: 1399px)
    max-width: $body-max-width-small
  @media screen and (min-width: 1400px)
    max-width: $body-max-width-large
</style>