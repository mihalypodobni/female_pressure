<template>
  <b-dropdown variant="link" class="p-0 w-100" right text="Right align" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
      <div class="menu-link">
        <span class="pr-2">login</span>
        <font-awesome-icon icon="user"/>
      </div>
    </template>
    <b-dropdown-form class="user-login mx-4 mt-4 mb-2">
      <b-form-group @submit.stop.prevent>
        <b-form-input
            class="user-login-input"
            placeholder="email"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
            class="user-login-input"
            type="password"
            placeholder="password"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col class="text-left my-auto link"><span>forgot password?</span></b-col>
        <b-col class="text-right" cols="auto">
          <b-button squared class="sign-in-button" @click="signIn">sign in</b-button>
        </b-col>
      </b-row>
    </b-dropdown-form>
    <hr class="divider mx-3">
    <b-dropdown-item-button class="text-center">not a member yet? join the network</b-dropdown-item-button>
  </b-dropdown>

</template>

<script>
export default {
  methods: {
    signIn() {
      console.log("signing in")
    }
  }
}
</script>

<style lang="sass">
.login_nav
  > .dropdown
    > .btn
      padding: 0

    > .dropdown-menu
      top: 15px !important
      margin-right: -15px !important
      border-radius: 0
      border: none
      background-color: $menu7

//.user-login-input
//  > ::placeholder
//    color: red
//    opacity: 1

</style>

<style lang="sass" scoped>
.menu-link
  cursor: pointer
  color: black !important
  text-decoration: none !important

  &:hover
    text-decoration: none !important
    font-weight: bolder

.link
  color: $userLoginDropdown
  text-decoration: none

  &:hover
    color: black

.user-login
  width: 300px !important

.user-login-input
  border-radius: 0
  border: 3px $userLoginDropdown solid
  color: $userLoginDropdown !important

.sign-in-button
  color: white
  background-color: $userLoginDropdown
  border: 0

.divider
  border-top: 3px solid white
</style>