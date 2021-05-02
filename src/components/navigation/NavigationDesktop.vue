<template>
    <b-row class="justify-content-center w-100 mx-0">
      <b-col class="text-center link female_pressure_nav">
        fp placeholder
      </b-col>
      <b-col v-for="(item, idx) in menuItems"
             :key="item.id + idx"
             class="text-center link"
             @click="$emit('navigate',item.id)"
             :class="[ item.id + '_nav', currentTab === item.id ? 'current-tab' : '']"
      >
        {{item.name}}
      </b-col>
      <b-col class="text-center link login_nav">login</b-col>
    </b-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    menuItems: Array
  },
  computed: mapState([
    'currentTab'
  ]),
}
</script>

<style lang="sass" scoped>
.link
  cursor: pointer
  padding-top: 20px
  padding-bottom: 20px
  &:hover
    font-weight: bolder

@each $name, $color in $menuItems
  .#{$name}_nav
    background-color: $color

.female_pressure_nav
  background-color: $menu1

.login_nav
  background-color: $menu7

.current-tab
  font-weight: bolder
  color: white //TODO talk to marine about this
</style>
