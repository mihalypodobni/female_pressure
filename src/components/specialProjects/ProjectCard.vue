

<template>
    <div>
        <b-row align-v="center">
          <!-- <img src="../../assets/fp-podcast.png" alt=""> -->
            <!-- PROJECT CONTAINER -->
            <b-col :key="project.id" v-for="project in projects" cols="12" lg="6" >
                <b-container class="project-container mt-4">
                    <b-row >
                    <b-col cols="4">
                        <b-img :src="getImgUrl(project.img)" :alt="project.title + ' logo'" class="project-img" ></b-img>
                    </b-col>

              <b-col cols="8">
                <div class="project-text">
                  <h3>{{ project.title }}</h3>
                  <p >{{ project.text }}</p>
                </div>
                <!-- <b-link :src="project.link" class="link" target="_blank">{{ project.link }}</b-link> -->
                <b-link :src="project.link" class="link" target="_blank">More...</b-link>

                <!-- SOCIAL MEDIA LINKS -->
                <b-row>
                  <b-button variant="link"
                            :href="link.link"
                            target="_blank"
                            v-for="(link,idx) in project.socialMedia"
                            :key="link.icon + idx"
                            class="p-1 link">
                    <font-awesome-icon :icon="['fab', link.icon]" size="lg" class="mx-2 my-2"/>
                  </b-button>
                </b-row>

              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
  </div>
</template>


<script>
export default {
  props: {
    projects: Array
  },
  computed: {
    console: () => console,
  },
  methods:{
    getImgUrl(pet) {
      var images = require.context('../../assets/', false, /\.svg$/)
      return images('./' + pet + ".svg")
    }
  }
}
</script>

<style lang="sass" scoped>
.project-container
  border: 2px solid $blueBoxBorder
  padding: 30px
  box-shadow: 0px 0px 15px grey
  display: flex
  align-items: center
  min-height: 300px

.project-text
  // min-height: 150px

.link
  @include link

.project-img
  border-radius: 50%
  width: 100%
</style>