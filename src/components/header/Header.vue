<template>
  <b-container v-if="!admin"
               :class="$store.state.isMobile ? 'f-body-container' : 'f-header-container'"
               class="mt-3 mb-5">
    <b-row :class="$store.state.isMobile ? 'mt-5' : 'mt-0'">
      <b-col class="text-left">
        <h1
          :class="$route.name === 'Home' ? 'home-header' : 'header'"
          class="mb-0"
        >
          <slot></slot>
        </h1>
        <h4 class="font-italic">
          <slot name="subtitle"></slot>
        </h4>
      </b-col>
      <b-col class="text-right my-auto px-0" cols="auto">
        <span v-if="$route.name === 'Home'">
          current members: {{memberCount}}
        </span>
      </b-col>
      <b-col class="text-right my-auto px-0" cols="auto">
        <span
            v-if="!authenticated && !$store.state.isMobile"
            class="circle text-center pt-4"
            @click="$router.push({ name: 'Join Network' })"
        >
          join the <br />
          network
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      authenticated: (state) => state.authentication.authenticated,
      admin: (state) => state.authentication.admin,
      memberCount: state => state.memberCount
    }),
  },
};
</script>

<style lang="sass" scoped>
.home-header
  color: black

.header
  color: #1fbb9e

.circle
  position: absolute
  top: -40px
  width: 80px
  height: 80px
  cursor: pointer
  border-radius: 50%
  background: #19fe77
  color: black
  line-height: 15px
  font-family: $font-bold
  @media screen and (max-width: 1399px)
    margin-left: calc(100vw / 7 - 130px)
  @media screen and (min-width: 1400px)
    margin-left: 60px
  &:hover
    text-shadow: 0 0 .4px #333, 0 0 .4px #333
</style>
