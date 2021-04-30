<!--<template>-->
<!--  <div class="nav-fill w-100 full-navbar">-->
<!--    <b-navbar class="justify-content-center" v-if="!$store.state.admin">-->
<!--      <b-navbar-nav justified class="nav-items">-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            class="female_pressure_nav">-->
<!--          fp placeholder-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','dashboard')"-->
<!--            class="search_nav"-->
<!--            :class="{ active: activeApp === 'dashboard' }">-->
<!--          search-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','orders')"-->
<!--            class="special_projects_nav"-->
<!--            :class="{ active: activeApp === 'orders' }">-->
<!--          special projects-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','classification')"-->
<!--            class="merch_nav"-->
<!--            :class="{active: activeApp === 'classification'}">-->
<!--          merch-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','classification')"-->
<!--            class="links_nav"-->
<!--            :class="{active: activeApp === 'classification'}">-->
<!--          links-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','classification')"-->
<!--            class="about_nav"-->
<!--            :class="{active: activeApp === 'classification'}">-->
<!--          about-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--            href="#"-->
<!--            @click="$emit('navigate','classification')"-->
<!--            class="login_nav"-->
<!--            :class="{active: activeApp === 'classification'}">-->
<!--          login-->
<!--        </b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--    </b-navbar>-->
<!--  </div>-->
<!--</template>-->

<template>
    <b-row class="justify-content-center w-100 mx-0">
      <b-col class="text-center link female_pressure_nav">
        fp placeholder
      </b-col>
      <b-col class="text-center  link search_nav"
             @click="$emit('navigate','search')">
        search
      </b-col>
      <b-col class="text-center  link special_projects_nav"
             @click="$emit('navigate','special_projects')">
        special projects
      </b-col>
      <b-col class="text-center  link merch_nav"
             @click="$emit('navigate','merch')">
        merch
      </b-col>
      <b-col class="text-center  link links_nav"
             @click="$emit('navigate','links')">
        links
      </b-col>
      <b-col class="text-center  link about_nav"
             @click="$emit('navigate','about')">
        about
      </b-col>
      <b-col class="text-center  link login_nav">login</b-col>
    </b-row>
</template>

<style lang="sass" scoped>
.link
  cursor: pointer
  padding-top: 20px
  padding-bottom: 20px
  &:hover
    font-weight: bolder

.female_pressure_nav
  background-color: $menu1

.search_nav
  background-color: $menu2

.special_projects_nav
  background-color: $menu3

.merch_nav
  background-color: $menu4

.links_nav
  background-color: $menu5

.about_nav
  background-color: $menu6

.login_nav
  background-color: $menu7
</style>
