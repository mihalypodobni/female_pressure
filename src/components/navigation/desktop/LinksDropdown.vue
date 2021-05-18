<template>
  <b-dropdown variant="link" class="p-0 w-100 mr-0" ref="links-dropdown" left toggle-class="text-decoration-none"
              no-caret>
    <template #button-content>
      <div class="menu-link" @click="$router.push({name: 'Links'})">
        <span class="pr-2 login">links</span>
      </div>
    </template>
    <b-dropdown-item v-for="(link, idx) in links"
                     :key="'link'+idx"
                     class="project-dropdown-item"
    >
      {{link.categoryTitle}}
    </b-dropdown-item>
  </b-dropdown>

</template>

<script>
import {links} from "@/assets/data/links";

export default {
  props: {
    showLinks: Boolean,
  },
  data() {
    return {
      links: links
    }
  },
  watch: {
    showLinks: function (val) {
      val ? this.$refs["links-dropdown"].show() : this.$refs["links-dropdown"].hide()
    },
  }
}
</script>

<style lang="sass">
.links_nav
  > .dropdown
    > .btn
      padding: 0 !important
    > .dropdown-menu
      top: 15px !important
      margin-left: -15px !important
      border-radius: 0
      border: none
      background-color: map-get($menuItems, "links")
      @media screen and (max-width: 1399px)
        width: 100vw * 3 / 7
      @media screen and (min-width: 1400px)
        width: $page-max-width * 3 / 7

.project-dropdown-item
  > a
    &:hover
      background-color: #D7F2F6!important
</style>

<style lang="sass" scoped>
.menu-link
  cursor: pointer
  color: black !important
  text-decoration: none !important
  &:hover
    text-decoration: none !important
    font-weight: bolder

.menu-project-logo
  width: 30px

</style>
