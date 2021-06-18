<template>
  <b-container class="body-container mt-3">
    <div>This is the admin page</div>
    <b-button @click="logoutAdmin()">Logout</b-button>
  </b-container>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      LOGOUT: "authentication/LOGOUT"
    }),
    logoutAdmin() {
      this.LOGOUT()
      this.$router.push({name: 'Home'})
    }
  }
}
</script>