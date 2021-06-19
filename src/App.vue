<template>
  <div id="app">
    <Navigation v-if="!admin" />
    <router-view />
    <Footer class="footer" v-if="!admin" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Navigation from "./components/navigation/NavigationHome";
import Footer from "./components/footer/Footer";

export default {
  data() {
    return {
      window: {
        width: 0,
        breakpointWidth: 768,
      },
    };
  },
  components: {
    Navigation,
    Footer,
  },
  created() {
    this.SET_MOBILE(window.innerWidth < this.breakpointWidth);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted() {
    this.loadFilterData();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapState({
      admin: (state) => state.authentication.admin,
    }),
  },
  methods: {
    ...mapMutations(["SET_MOBILE"]),
    ...mapActions({
      loadFilterData: "search/loadFilterData",
    }),
    handleResize() {
      this.window = window.innerWidth;
      this.window < 1024 ? this.SET_MOBILE(true) : this.SET_MOBILE(false);
    },
  },
};
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
    max-width: $body-max-width-small
  @media screen and (min-width: 1400px)
    max-width: $body-max-width-large
</style>
