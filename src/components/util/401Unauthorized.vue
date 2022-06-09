<template>
  <div>
    <Header>
      401 unauthorized access
    </Header>
    <b-container class="mt-5 f-body-container">
      You are unauthorized to visit this page
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/HeaderComp"

export default {
  components: {
    Header
  }
}
</script>