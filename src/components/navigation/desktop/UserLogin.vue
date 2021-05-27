<template>
  <b-dropdown variant="link" class="p-0 w-100" ref="login" right toggle-class="text-decoration-none" no-caret>
    <template #button-content>
      <div class="dropdown-link">
        <span class="pr-2 login">login</span>
        <font-awesome-icon icon="user-circle" size="lg"/>
      </div>
    </template>
    <b-dropdown-form class="user-login mx-3 mt-4 mb-2" >
      <b-form-group @submit.stop.prevent>
        <b-form-input
            class="user-login-input"
            placeholder="email"
            v-model="login.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
            class="user-login-input"
            type="password"
            placeholder="password"
            v-model="login.password"
        ></b-form-input>
      </b-form-group>
      <b-row class="m-0 w-100">
        <b-col cols="auto" class="text-left p-0 my-auto sub-link"><span>forgot password?</span></b-col>
        <b-col class="text-right p-0">
          <b-button squared class="sign-in-button" @click="userLogin">sign in</b-button>
        </b-col>
      </b-row>
    </b-dropdown-form>
    <hr class="divider">
    <b-dropdown-text class="text-center mb-2">not a member yet?
      <b-link href="#" class="link">join the network</b-link>
    </b-dropdown-text>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    showLogin: Boolean,
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    userLogin() {
      console.log("signing in", this.login)
    }
  },
  watch: {
    showLogin: function (val) {
      val ? this.$refs.login.show() : this.$refs.login.hide()
    },
  }
}
</script>

<style lang="sass">
.user_nav
  > .dropdown
    > .btn
      padding: 0!important
    > .dropdown-menu
      top: 15px !important
      margin-right: -15px !important
      border-radius: 0
      border: none
      background-color: $menu7
</style>

<style lang="sass" scoped>
.link
  @include link

.sub-link
  @include sub-link

.user-login
  width: 300px !important

.user-login-input
  border-radius: 0
  border: 3px $userLoginDropdown solid
  &::placeholder
    color: $userLoginDropdown
    font-style: italic

.sign-in-button
  color: black
  background-color: $userLoginDropdown
  border: 3px solid $userLoginDropdown!important
  &:hover
    color: $userLoginDropdown
    background: white
    border: 3px solid $userLoginDropdown
  &:active
    color: black!important
    background-color: white!important
    border: 3px solid $userLoginDropdown!important
  &:focus
    color: black!important
    background-color: white!important
    border: 3px solid $userLoginDropdown!important

.divider
  border-top: 2px solid white
  width: 85%
</style>