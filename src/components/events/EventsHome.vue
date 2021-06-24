<template>
  <div>
    <Header />
    <b-container class="mt-5 body-container">
      This is the events!!
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import {mapMutations} from "vuex";

export default {
  components: {
    Header
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE('events')
  }
}
</script>