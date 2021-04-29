<template>
  <div>
    <NavigationMobile v-if="$store.state.isMobile" @logout="logout" @navigate="navigate"/>
    <NavigationDesktop v-else @logout="logout" @navigate="navigate"/>
  </div>
</template>

<script>
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'
import axios from "axios";
//TODO getting an error when i replace axios below with this.$http

export default {
  methods: {
    logout() {
      this.$store.dispatch("logout")
      delete axios.defaults.headers.common['Authorization']
      this.$router.push('/')
    },
    navigate(route) {
      if (this.activeApp !== route) {
        this.activeApp = route
        switch (this.activeApp) {
          case 'dashboard':
            this.$router.push('/dashboard')
            break;
          case 'orders':
            this.$router.push('/orders')
            break;
          case 'classification':
            this.$router.push('/classification')
            break;
        }
      }
    }
  },
  components: {
    NavigationDesktop,
    NavigationMobile
  }
}
</script>
