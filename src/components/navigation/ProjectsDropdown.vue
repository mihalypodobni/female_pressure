<template>
  <b-dropdown variant="link" class="p-0 w-100" ref="login" left toggle-class="text-decoration-none"
              no-caret>
    <template #button-content>
      <div class="menu-link">
        <span class="pr-2 login">projects</span>
      </div>
    </template>
    <b-dropdown-item>Item 1</b-dropdown-item>
    <b-dropdown-item>Item 2</b-dropdown-item>
    <b-dropdown-item>Item 3</b-dropdown-item>
    <b-dropdown-item>Item 4</b-dropdown-item>
  </b-dropdown>

</template>

<script>
export default {
  props: {
    showLogin: Boolean,
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.projects_nav
  > .dropdown
    > .btn
      padding: 0 !important
    > .dropdown-menu
      top: 15px !important
      margin-right: 15px !important
      border-radius: 0
      border: none
      background-color: map-get($menuItems, "projects")
</style>

<style lang="sass" scoped>
.menu-link
  cursor: pointer
  color: black !important
  text-decoration: none !important
  &:hover
    text-decoration: none !important
    font-weight: bolder

</style>