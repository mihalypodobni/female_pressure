<template>
  <div>
    <b-row class="w-100 mx-0 mobile-menu">
      <b-col v-b-toggle.sidebar-menu class="menu1 menu-icon">
        <font-awesome-icon class="ml-3" icon="bars" size="lg"/>
      </b-col>
      <b-col class="menu2">
        <div class="logo-wrapper">
          <b-img width="80" src="@/assets/fp-main-logo-outline.svg" class="fp-logo"
                 @click="$router.push({name: 'Home'})"></b-img>
        </div>
      </b-col>
      <b-col v-b-toggle.sidebar-user class="menu3 menu-icon text-right">
        <font-awesome-icon icon="user-circle" class="mr-3" size="lg"/>
      </b-col>
    </b-row>
    <b-sidebar id="sidebar-menu"
               width="450px"
               title="Menu"
               backdrop
    >
      <b-row>
        <b-col v-for="(item, idx) in menuItems"
               :key="item.id + idx"
               cols="12"
               class="text-center py-4 font-weight-bold"
               @click="$emit('navigate',item.id)"
               :class="item.id + '_nav'"
        >
          {{ item.id }}
        </b-col>
        <b-col class="text-center join-column">
          <span
              v-if="!authenticated"
              class="circle text-center pt-4"
              @click="$router.push({ name: 'Join Network' })"
          >
          join the <br />
          network
        </span>
        </b-col>
      </b-row>
    </b-sidebar>
    <b-sidebar id="sidebar-user"
               :title="authenticated ? 'Member Area' : 'Login'"
               right
               backdrop
               width="450px"
    >
      <div class="px-3 py-2">
        <user-login-mobile/>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import UserLoginMobile from "./UserLoginMobile";
import {mapState} from "vuex";

export default {
  components: {
    UserLoginMobile
  },
  props: {
    menuItems: Array
  },
  computed: {
    ...mapState({
      authenticated: state => state.authentication.authenticated
    }),
  }
}
</script>

<style lang="sass" scoped>
@each $name, $color in $menuItems
  .#{$name}_nav
    background-color: $color
    &:hover
      color: white
      cursor: pointer

.mobile-menu
  height: 50px

.menu-icon
  padding-top: 13px

  &:focus
    outline: none !important

.menu1
  background-color: #19fe77

.menu2
  background-color: #a1c9cb

.menu3
  background-color: #d8f2f6

.logo-wrapper
  position: absolute
  left: calc(50% - 40px)
  top: 10px

.fp-logo
  &:hover
    cursor: pointer

.join-column
  height: 80px

.circle
  position: absolute
  top: 20px
  right: calc(50% - 40px)
  height: 80px
  width: 80px
  cursor: pointer
  border-radius: 50%
  background: #19fe77
  color: black
  line-height: 15px
  font-family: $font-bold
  @media screen and (max-width: 1399px)
    margin-left: calc(100vw / 7 - 130px)
  @media screen and (min-width: 1400px)
    margin-left: 60px
  &:hover
    color: white
</style>

<style lang="sass">
#sidebar-user
  background-color: #d8f2f6!important

</style>