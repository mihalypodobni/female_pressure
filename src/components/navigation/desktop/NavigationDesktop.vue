<template>
  <b-row class="justify-content-center w-100 mx-0">
    <b-col class="text-center menu-link link-padding home_nav">
      <div class="logo-wrapper">
        <b-img :src="require('@/assets/fp-main-logo-outline.svg')" class="fp-logo" @click="$emit('navigate','home')"></b-img>
      </div>
    </b-col>
    <b-col v-for="(item, idx) in menuItems"
           :key="item.id + idx"
           class="text-center menu-link link-padding"
           @click="$emit('navigate',item.id)"
           :class="[ item.id + '_nav', $route.name === item.name ? 'current-tab' : '']"
           @mouseenter="showDropdown(item.id)"
           @mouseleave="hideDropdown(item.id)"
    >
      <ProjectsDropdown
          v-if="item.id ==='projects'"
          :show-projects="showProjects"
          @navigate="$emit('navigate',$event)"/>
      <LinksDropdown v-else-if="item.id ==='links'" :show-links="showLinks" @navigate="$emit('navigate',$event)"/>
      <span class="text-lowercase" v-else>
        {{ item.name }}
      </span>
    </b-col>

    <b-col class="text-center menu-link link-padding user_nav">
      <UserLogin />
    </b-col>
  </b-row>
</template>

<script>
import UserLogin from "./UserLoginDesktop";
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
  }
}
</script>

<style lang="sass" scoped>
$menu1: #7FC6C5
$menu2: #409FAD
$menu3: #59E18C
$menu4: #00FE77
$menu5: #00FFC5
$menu6: #00FFFD
$menu7: #D7F2F6
$menuItems: ("search": #7FC6C5, "projects": $menu3, "events": $menu4, "links": $menu5, "about": $menu6)

@each $name, $color in $menuItems
  .#{$name}_nav
    background-color: $color

.home_nav
  background-color: #7FC6C5

.user_nav
  background-color: #D7F2F6

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
  @media screen and (max-width: 1399px)
    width: calc(100vw / 7 - 30px)
  @media screen and (min-width: 1400px)
    width: 150px

.login
  &:hover
    font-weight: bold
</style>
