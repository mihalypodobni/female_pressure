<template>
  <b-dropdown variant="link" class="p-0 w-100" ref="login" right toggle-class="text-decoration-none" no-caret >
    <template #button-content>
      <div class="dropdown-link" @click.stop="showDropdown = !showDropdown">
        <span v-if="authenticated" class="pr-2 login">member</span>
        <span v-else class="pr-2 login font-weight-bold">login</span>
        <font-awesome-icon icon="user-circle" size="lg"/>
      </div>
    </template>
    <div v-if="authenticated" class="user-login text-right mx-3 mt-4 mb-2">
      <b-dropdown-item href="#">view your profile</b-dropdown-item>
      <b-dropdown-item href="#">settings</b-dropdown-item>
      <b-dropdown-item href="#">saved profiles</b-dropdown-item>
      <b-dropdown-item @click="userLogout">logout</b-dropdown-item>
    </div>
    <div v-else >
      <b-dropdown-form class="user-login mx-3 mt-4 mb-2">
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
          <b-col cols="auto" class="text-left p-0 my-auto f-sub-link"><span>forgot password?</span></b-col>
          <b-col class="text-right p-0">
            <b-button squared class="sign-in-button" @click="userLogin">sign in</b-button>
          </b-col>
        </b-row>
        <b-row class="mx-0 mt-2 mb-0 w-100" v-if="error.notExist || error.serverError">
          <b-col class="p-0 text-danger" v-if="error.notExist">User / Password combo does not exist</b-col>
          <b-col class="p-0 text-danger" v-if="error.serverError">Server Error - please contact f:p if problem persists</b-col>
        </b-row>
      </b-dropdown-form>
      <hr class="divider">
      <b-dropdown-text class="text-center mb-2 join-section">
        <span class="font-weight-normal">not a member yet? </span>
        <b-link @click="$router.push({ name: 'Join Network' }); SET_PAGE('join');" class="f-link join-network">join the
          network
        </b-link>
      </b-dropdown-text>
    </div>
  </b-dropdown>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      error: {
        notExist: false,
        serverError: false
      },
      showDropdown: false
    }
  },
  methods: {
    userLogin() {
      this.error.notExist = false
      this.error.serverError = false
      this.loginAction({
        email: this.login.email,
        password: this.login.password
      }).then(() => {
        this.showDropdown = false
        if (this.admin) {
          this.$router.push({name: 'Admin Home'})
          this.SET_PAGE('')
        } else if (this.$route.path === '/') {
          //do nothing
        } else if (this.$route.meta.onlyLoggedOut) {
          this.$router.push({name: 'Home'})
          this.SET_PAGE('home')
        } else {
          window.location.reload()
        }
      }).catch((err) => {
        if (err.response && err.response.status === 401) {
          this.error.notExist = true
          return
        }
        this.error.serverError = true
      })
    },
    userLogout() {
      this.showDropdown = false
      this.LOGOUT()
      if (!this.$route.meta.public) {
        this.$router.push({name: 'Home'})
        this.SET_PAGE('home')
      } else if (this.$route.path === '/') {
        //do nothing
      } else {
        window.location.reload()
      }
    },
    ...mapMutations(["authentication/LOGOUT"]),
    ...mapMutations({LOGOUT: "authentication/LOGOUT"}),
    ...mapActions({
      loginAction: 'authentication/login'
    })
  },
  watch: {
    showDropdown: function (val) {
      val ? this.$refs.login.show() : this.$refs.login.hide()
    },
  },
  computed: {
    ...mapState({
      authenticated: state => state.authentication.authenticated,
      admin: state => state.authentication.admin
    }),
  }
}
</script>

<style lang="sass">
.user_nav
  > .dropdown
    > .btn
      padding: 0 !important

      &:focus
        outline: none !important
        box-shadow: none !important

    > .dropdown-menu
      top: 12px !important
      margin-right: -15px !important
      border-radius: 0
      border: none
      background-color: $menu7
</style>

<style lang="sass" scoped>
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
  border: 3px solid $userLoginDropdown !important

  &:hover
    color: $userLoginDropdown
    background: white
    text-shadow: 0 0 1px $userLoginDropdown
    border: 3px solid $userLoginDropdown

  &:active
    color: black !important
    background-color: white !important
    border: 3px solid $userLoginDropdown !important

  &:focus
    color: black !important
    background-color: white !important
    border: 3px solid $userLoginDropdown !important

.divider
  border-top: 2px solid white
  width: 85%

.join-section
  cursor: default

.join-network
  cursor: pointer !important
</style>