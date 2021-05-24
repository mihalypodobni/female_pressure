<template>
  <b-container class="body-container mt-3">
    <b-row>
      <b-col class="text-left">
        <h1 :class="this.currentTab === 'home' ? 'home-header' : 'header'" class="mb-0">{{ this.currentTabTitle }}</h1>
        <h4 v-if="this.currentTab === 'home'" class="font-italic">database of people operating in electronic music</h4>
      </b-col>
      <b-col class="text-right my-auto" cols="auto">
        <span v-if="this.currentTab === 'home'"  class="pr-5">current members: 5454</span>
        <span class="circle">join the network</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapState} from "vuex";

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
  }
}
</script>

<style lang="sass" scoped>
.home-header
  color: black

.header
  color: #1fbb9e

//.circle
//  width: 50px
//  height: 50px
//  line-height: 50px
//  border-radius: 50%
//  font-size: $medium-text
//  color: #fff
//  text-align: center
//  background: #000

</style>