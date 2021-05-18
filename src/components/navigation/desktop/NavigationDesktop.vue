<template>
  <b-row class="justify-content-center w-100 mx-0">
    <b-col class="text-center link home_nav">
      <div class="logo-wrapper">
        <b-img src="@/assets/fp-main-logo.svg" class="fp-logo" @click="$emit('navigate','home')"></b-img>
      </div>
    </b-col>
    <b-col v-for="(item, idx) in menuItems"
           :key="item.id + idx"
           class="text-center link"
           @click="item.name === 'projects' || item.name === 'links' ? null : $emit('navigate',item.id)"
           :class="[ item.id + '_nav', currentTab === item.id ? 'current-tab' : '']"
           @mouseenter="showDropdown(item.name)"
           @mouseleave="hideDropdown(item.name)"
    >
      <ProjectsDropdown v-if="item.name==='projects'" :show-projects="showProjects"/>
      <LinksDropdown v-else-if="item.name==='links'" :show-links="showLinks"/>
      <span v-else>{{ item.name }}</span>
    </b-col>

    <b-col class="text-center link user_nav"
           @mouseenter="showLogin = true"
           @mouseleave="showLogin = false"
    >
      <UserLogin :showLogin="showLogin"/>
    </b-col>
  </b-row>
</template>

<script>
import {mapState} from "vuex";
import UserLogin from "./UserLogin";
import ProjectsDropdown from "./ProjectsDropdown"
import LinksDropdown from "./LinksDropdown";

export default {
  components: {
    UserLogin,
    ProjectsDropdown,
    LinksDropdown
  },
  data() {
    return {
      showLogin: false,
      showProjects: false,
      showLinks: false
    }
  },
  methods: {
    showDropdown(name) {
      switch (name) {
        case "projects":
          this.showProjects = true
          break;
        case "login":
          this.showLogin = true
          break;
        case "links":
          this.showLinks = true
          break;
      }
    },
    hideDropdown(name) {
      switch (name) {
        case "projects":
          this.showProjects = false
          break;
        case "login":
          this.showLogin = false
          break;
        case "links":
          this.showLinks = false
          break;
      }
    }
  },
  props: {
    menuItems: Array
  },
  computed: mapState([
    'currentTab'
  ]),
}
</script>

<style lang="sass" scoped>
.link
  cursor: pointer
  padding-top: 20px
  padding-bottom: 20px

  &:hover
    font-weight: bolder

@each $name, $color in $menuItems
  .#{$name}_nav
    background-color: $color

.home_nav
  background-color: $menu1

.user_nav
  background-color: $menu7

.current-tab
  font-weight: bolder
  color: white

.logo-wrapper
  position: absolute
  width: 3rem
  max-width: 200px
  top: 10px
  @media screen and (max-width: 1399px)
    left: -100% + 95
  @media screen and (min-width: 1400px)
    left: -100% + 100

.fp-logo
  position: fixed
  z-index: 9
  border: 3px solid white
  @media screen and (max-width: 1399px)
    width: calc(100vw / 7 - 30px)
  @media screen and (min-width: 1400px)
    width: 150px
</style>
