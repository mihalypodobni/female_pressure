<template>
  <b-container fluid="xl" class="px-0 nav-container">
    <NavigationMobile v-if="$store.state.isMobile" :menuItems="menuItems" @logout="logout" @navigate="navigate"/>
    <NavigationDesktop v-else :menuItems="menuItems" @logout="logout" @navigate="navigate" class="desktop-nav mb-3"/>
  </b-container>
</template>

<script>
import NavigationMobile from './mobile/NavigationMobile'
import NavigationDesktop from './desktop/NavigationDesktop'
import axios from "axios";

export default {
  data() {
    return {
      menuItems: [
        {id: 'search', name: 'Search'},
        {id: 'projects', name: 'Projects'},
        {id: 'events', name: 'Events'},
        {id: 'links', name: 'Links'},
        {id: 'about', name: 'About'}
      ]
    }
  },
  methods: {
    logout() {
      delete axios.defaults.headers.common['Authorization']
      this.$router.push('/')
    },
    navigate(route) {
      if (this.$route.name !== route) {
        switch (route) {
          case 'home':
            this.$router.push({name: 'Home'})
            break;
          case 'search':
            this.$router.push({name: 'Search'})
            break;
          case 'projects':
            this.$router.push({name: 'Projects'})
            break;
          case 'events':
            this.$router.push({name: 'Events'})
            break;
          case 'links':
            this.$router.push({name: 'Links'})
            break;
          case 'about':
            this.$router.push({name: 'About'})
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

<style lang="sass" scoped>
.nav-container
  max-width: $page-max-width

.desktop-nav /deep/ .current-tab
  box-shadow: 0 1.8px 0.3px -5px rgba(0, 0, 0, 0.013), 0 3.6px 3.9px -5px rgba(0, 0, 0, 0.033), 0 6.2px 15.2px -5px rgba(0, 0, 0, 0.072), 0 12px 58px -5px rgba(0, 0, 0, 0.25)
  z-index: 9
  font-weight: 500
  margin-bottom: -8px!important

.desktop-nav /deep/ .dropdown-link
  color: black
  font-family: $font-bold!important
  &:hover
    text-shadow: 0 0 .4px #333, 0 0 .4px #333


.desktop-nav /deep/ .menu-link
  cursor: pointer
  color: black
  font-weight: 300
  text-decoration: none !important
  font-family: $font-bold!important
  &:hover
    text-decoration: none !important
    text-shadow: 0 0 .4px #333, 0 0 .4px #333
  &.link-padding
    padding-top: 15px
    padding-bottom: 15px
</style>
