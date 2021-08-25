<template>
  <b-dropdown
    variant="link"
    class="p-0 w-100 mr-0"
    ref="links-dropdown"
    left
    toggle-class="text-decoration-none"
    no-caret
  >
    <template #button-content>
      <div class="dropdown-link font-weight-bold"
           @click="$emit('navigate','links')">
        <span class="pr-2 login">links</span>
      </div>
    </template>
    <b-dropdown-item
      v-for="(link, idx) in links"
      :key="'link' + idx"
      class="link-dropdown-item"
      @click="$router.push('/links/' + link.shortCategoryTitle)"
    >
      {{ link.categoryTitle }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { links } from "@/assets/data/links";
import {mapState} from "vuex";

export default {
  props: {
    showLinks: Boolean,
  },
  data() {
    return {
      links: links,
    };
  },
  computed: mapState([
    'currentTab'
  ]),
  watch: {
    showLinks: function(val) {
      val
        ? this.$refs["links-dropdown"].show()
        : this.$refs["links-dropdown"].hide();
    },
  },
};
</script>

<style lang="sass">
.links_nav
  > .dropdown
    > .btn
      padding: 0 !important
      &:focus
        outline: none!important
        box-shadow: none!important
    > .dropdown-menu
      top: 12px !important
      margin-left: -15px !important
      border-radius: 0
      border: none
      background-color: map-get($menuItems, "links")
      @media screen and (max-width: 1399px)
        width: calc(100vw * 3 / 7 - 5px)
      @media screen and (min-width: 1400px)
        width: $page-max-width * 3 / 7

.link-dropdown-item
  > a
    &:hover
      background-color: #D7F2F6!important
</style>

<style lang="sass" scoped>
.menu-project-logo
  width: 30px
</style>
