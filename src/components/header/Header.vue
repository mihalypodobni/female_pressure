<template>
  <b-container v-if="!admin" class="f-header-container mt-3 mb-5">
    <b-row>
      <b-col class="text-left">
        <h1
          :class="statePage === 'home' ? 'home-header' : 'header'"
          class="mb-0"
        >
          {{ currentPage.title }}
        </h1>
        <h4 class="font-italic">{{ currentPage.subtitle }}</h4>
      </b-col>
      <b-col class="text-right my-auto px-0" cols="auto">
        <span v-if="statePage === 'home'">current members: 5454</span>
        <span
          v-if="!authenticated"
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
import { mapMutations, mapState } from "vuex";
import { pageHeaders } from "@/assets/data/page-headers.js";

export default {
  data() {
    return {
      pageHeaders: pageHeaders,
    };
  },
  computed: {
    currentPage: function () {
      let index = this.pageHeaders.findIndex((x) => x.page === this.statePage);
      return this.pageHeaders[index];
    },
    ...mapState({
      statePage: (state) => state.currentPage,
      authenticated: (state) => state.authentication.authenticated,
      admin: (state) => state.authentication.admin,
    }),
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
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
  @media screen and (max-width: 1399px)
    margin-left: calc(100vw / 7 - 130px)
  @media screen and (min-width: 1400px)
    margin-left: 60px
</style>
