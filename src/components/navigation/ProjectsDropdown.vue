<template>
  <b-dropdown variant="link" class="p-0 w-100 mr-0" ref="projects-dropdown" left toggle-class="text-decoration-none"
              no-caret>
    <template #button-content>
      <div class="menu-link" @click="$router.push({name: 'Projects'})">
        <span class="pr-2 login">projects</span>
      </div>
    </template>
    <b-dropdown-item v-for="(project, idx) in projects"
                     :key="'project'+idx"

    >
      <b-img :src="require('@/assets/special-projects-logos/' + project.img)" class="menu-project-logo"></b-img>
      {{project.title}} <small>[{{project.year}}]</small>
    </b-dropdown-item>

  </b-dropdown>

</template>

<script>
import  { projects } from "@/assets/data/special-projects.js"

export default {
  props: {
    showProjects: Boolean,
  },
  data() {
    return {
      projects: projects
    }
  },
  watch: {
    showProjects: function (val) {
      val ? this.$refs["projects-dropdown"].show() : this.$refs["projects-dropdown"].hide()
    },
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
      margin-left: -15px !important
      border-radius: 0
      border: none
      background-color: map-get($menuItems, "projects")
      @media screen and (max-width: 1399px)
        width: 100vw * 3 / 7
      @media screen and (min-width: 1400px)
        width: $page-max-width * 3 / 7
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