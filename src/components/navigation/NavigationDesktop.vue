<template>
  <b-row class="justify-content-center w-100 mx-0">
    <b-col class="text-center link female_pressure_nav">
      <div class="logo-wrapper">
      <b-img src="../../assets/fp-main-logo.svg" class="fp-logo" @click="$emit('navigate','home')"></b-img>
      </div>
    </b-col>
    <b-col v-for="(item, idx) in menuItems"
           :key="item.id + idx"
           class="text-center link"
           @click="$emit('navigate',item.id)"
           :class="[ item.id + '_nav', currentTab === item.id ? 'current-tab' : '']"
    >
      {{ item.name }}
    </b-col>
    <b-col class="text-center link login_nav"
           @click="showLogin = !showLogin"
    >
      <UserLogin/>
    </b-col>
  </b-row>
</template>

<script>
import {mapState} from "vuex";
import UserLogin from "./UserLogin";

export default {
  components: {
    UserLogin
  },
  data() {
    return {
      showLogin: false
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
.dropdown
  background-color: $menu7

.link
  cursor: pointer
  padding-top: 20px
  padding-bottom: 20px

  &:hover
    font-weight: bolder

@each $name, $color in $menuItems
  .#{$name}_nav
    background-color: $color

.female_pressure_nav
  background-color: $menu1

.login_nav
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
