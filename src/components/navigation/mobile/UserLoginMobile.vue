<template>
  <div>
    <div v-if="authenticated" class="w-100 text-right px-3 mt-4 mb-2">
      <div>view your profile</div>
      <div>settings</div>
      <div>saved profiles</div>
      <div @click="userLogout">logout</div>
    </div>
    <div v-else>
      <b-form class="user-login mx-3 mt-4 mb-2">
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
          <b-col class="p-0 text-danger" v-if="error.serverError">Server Error - please contact f:p if problem
            persists
          </b-col>
        </b-row>
      </b-form>
      <hr class="divider">
      <div class="text-center mb-2 join-section">
        <span class="font-weight-normal">not a member yet? </span>
        <b-link @click="$router.push({ name: 'Join Network' })" class="f-link join-network">
          join the network
        </b-link>
      </div>
    </div>
  </div>
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
        } else if (this.$route.path === '/') {
          //do nothing
        } else if (this.$route.meta.onlyLoggedOut) {
          this.$router.push({name: 'Home'})
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

<style lang="sass" scoped>
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