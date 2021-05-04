<template>
  <b-dropdown variant="link" class="p-0 w-100" right text="Right align" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
            <div class="link">
              <span class="pr-2">login</span> <font-awesome-icon icon="user" />
            </div>
    </template>
    <b-dropdown-form class="user-login mx-4 mt-4 mb-2">
      <b-form-group @submit.stop.prevent>
        <b-form-input
            class="user-login-input"
            size="sm"
            placeholder="email"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
            class="user-login-input"
            type="password"
            size="sm"
            placeholder="password"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col class="text-left">forgot password?</b-col>
        <b-col class="text-right" cols="auto"><b-button squared class="sign-in-button" @click="signIn">sign In</b-button></b-col>
      </b-row>
    </b-dropdown-form>
    <b-dropdown-divider class="divider"></b-dropdown-divider>
    <hr>
    <b-dropdown-item-button class="text-center">not a memeber yet? join the network</b-dropdown-item-button>
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
      top: 15px!important
      margin-right: -15px!important
      border-radius: 0
      border: none
      background-color: $menu7

</style>

<style lang="sass" scoped>
.link
  cursor: pointer
  color: black!important
  text-decoration: none!important
  &:hover
    text-decoration: none!important
    font-weight: bolder

.user-login
  width: 25vw!important

.user-login-input
  border-radius: 0
  border: 3px $userLoginDropdown solid

.sign-in-button
  color: white
  background-color: $userLoginDropdown
  border: 0
//.divider
//  color: white
//  width: 4px
</style>