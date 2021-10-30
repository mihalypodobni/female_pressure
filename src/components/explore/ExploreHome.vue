<template>
  <div>
    <Header>
      explore members
    </Header>
    <b-container class="mt-5 f-body-container">
      <WorldMap/>
      <alt-map v-if="0" />
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import WorldMap from '@/components/explore/WorldMap'

export default {
  components: {
    Header,
    WorldMap
  }
}
</script>