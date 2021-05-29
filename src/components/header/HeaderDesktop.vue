<template>
  <b-container class="body-container mt-3">
    <b-row>
      <b-col class="text-left">
        <h1 :class="this.currentTab === 'home' ? 'home-header' : 'header'" class="mb-0">{{ this.currentTabTitle }}</h1>
        <h4 v-if="this.currentTab === 'home'" class="font-italic">database of people operating in electronic music</h4>
      </b-col>
      <b-col class="text-right my-auto px-0 " cols="auto">
        <span v-if="this.currentTab === 'home'">current members: 5454</span>
        <span class="circle text-center pt-4" @click="$router.push({ name: 'Join Network' }); SET_TAB('');">
          join the <br> network
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    currentTabTitle: function () {
      let tab = ''
      switch (this.currentTab) {
        case 'home':
          tab = 'female:pressure'
          break;
        case 'projects':
          tab = 'projects'
          break;
        default:
          tab = 'tbd'
          break;
      }
      return tab
    },
    ...mapState({
      currentTab: state => state.currentTab
    }),
  },
  methods: {
    ...mapMutations(["SET_TAB"]),
  },
}
</script>

<style lang="sass" scoped>
.home-header
  color: black

.header
  color: #1fbb9e

.circle
  position: absolute
  top: -25px
  width: 80px
  height: 80px
  cursor: pointer
  border-radius: 50%
  background: #19fe77
  color: black
  line-height: 15px
  @media screen and (max-width: 1399px)
    margin-left: calc(100vw / 7 - 130px)
  @media screen and (min-width: 1400px)
    margin-left: 60px
</style>
