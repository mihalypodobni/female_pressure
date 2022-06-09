
<template>
  <div id="app"
        :class="$route.name === 'Home' ? 'gradient-home' : 'gradient-normal'"
  >
    <Navigation v-if="!admin"/>
    <router-view/>
    <Footer class="footer" v-if="!admin"/>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import Navigation from "./components/navigation/NavigationHome";
import Footer from "./components/footer/FooterComp"
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
@import "@/styles/_variables.sass"
@import "@/styles/_mixins.sass"
@import "@/styles/global.sass"

#app
  min-height: 100vh
  width: 100vw
  display: flex
  font-size: 1rem!important
  flex-direction: column
  font-family: 'Gravity Regular', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>

<style lang="sass" scoped>
.footer
  margin-top: auto

.gradient-normal
  background-image: linear-gradient(white, #19fe77)
  background-size: 100vw 450px
  background-repeat: no-repeat
  background-position: bottom

.gradient-home
  background-image: url('~@/assets/other_photos/sample_globe.svg'), linear-gradient(white, #19fe77)
  background-size: 100vw calc(100vh - 300px), 100vw 450px
  background-repeat: no-repeat, no-repeat
  background-position: center top 50px, bottom
</style>