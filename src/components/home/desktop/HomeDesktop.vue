<template>
  <div>
    <Header>
      female pressure
      <template #subtitle>
        database of people operating in electronic music
      </template>
    </Header>
    <b-container class="mt-5 f-body-container">
      <h4>Testing information to go on the page</h4>
      <WorldMap/>
    </b-container>
  </div>
</template>

<script>
import WorldMap from './WorldMap'
import Header from "@/components/header/Header"

export default {
  components: {
    WorldMap,
    Header
  },
}
</script>