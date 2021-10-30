<template>
  <div>
    <Header>
      female pressure
      <template #subtitle>
        database of people operating in electronic music
      </template>
    </Header>
    <b-container class="mt-5 f-body-container">
      <b-link @click="$router.push('/explore')">
        Explore member globe</b-link>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"

export default {
  components: {
    Header
  },
}
</script>