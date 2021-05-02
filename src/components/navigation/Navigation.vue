<template>
  <div>
    <NavigationMobile v-if="$store.state.isMobile" :menuItems="menuItems" @logout="logout" @navigate="navigate"/>
    <NavigationDesktop v-else :menuItems="menuItems" @logout="logout" @navigate="navigate"/>
  </div>
</template>

<script>
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'
import axios from "axios";
import {mapMutations, mapState} from 'vuex';

export default {
  data() {
    return {
      menuItems: [
        {id: 'search', name: 'search'},
        {id: 'special_projects', name: 'special projects'},
        {id: 'events', name: 'events'},
        {id: 'links', name: 'links'},
        {id: 'about', name: 'about'}
      ]
    }
  },
  computed: mapState([
    'currentTab'
  ]),
  methods: {
    ...mapMutations([
        "SET_TAB"
    ]),
    logout() {
      // this.logout()
      delete axios.defaults.headers.common['Authorization']
      this.$router.push('/')
    },
    navigate(route) {
      if (this.currentTab !== route) {
        this.SET_TAB(route)
        switch (route) {
          case 'home':
            this.$router.push({name: 'Home'})
            break;
          case 'search':
            this.$router.push({name: 'Search'})
            break;
          case 'special_projects':
            this.$router.push({name: 'Special Projects'})
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
