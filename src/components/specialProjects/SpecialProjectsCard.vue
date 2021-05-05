<template>
  <b-card class="p-0 project-card">
    <b-card-body class="p-0">
      <b-row>
        <b-col class="text-left" cols="3">
          <b-img :src="getImgUrl(project.img)" :alt="project.title + ' logo'" class="project-img"/>
        </b-col>
        <b-col cols="9">
          <b-link :href="project.link">
            <h4>{{project.title}}</h4>
          </b-link>
          <div>{{project.text}}</div>
          <div class="mt-3">
            <font-awesome-icon :icon="['fab', 'soundcloud']" size="lg" class="mx-2 my-2"/>
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" class="mx-2 my-2"/>
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" class="mx-2 my-2"/>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>

export default {
  props: {
    project: Array
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../../assets/', false, /\.svg$/)
      return images('./' + pet + ".svg")
    }
  }
}

</script>

<style lang="sass" scoped>
.project-img
  width: 100px

.project-card
  height: 250px
  border: 2px solid $blueBoxBorder
  box-shadow: 0px 0px 15px grey
</style>