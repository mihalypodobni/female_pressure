<template>
  <a :href="project.link" class="card-link link">
    <b-card no-body class=" project-card px-3 py-2">
      <div class="card-body m-0 p-0">
        <b-row>
          <b-col class="text-left d-flex align-items-center" cols="12" xl="3">
            <div class="d-flex align-items-center">
              <b-img
                :src="getImgUrl(project.img)"
                :alt="project.title + ' logo'"
                class="project-img m-2 p-0"
              />
            </div>
          </b-col>
          <b-col cols="12" xl="9" class="p-0 mh-50">
            <div class="m-4 p-0">
              <h4 class="m-0">
                {{ project.title }}
              </h4>
              <p class="project-year mb-2">{{ project.year }}</p>
              <div>
                {{ project.text }}
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </a>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    getImgUrl(img) {
      let images = require.context("@/assets/special-projects-logos");
      return images("./" + img);
    },
  },
};
</script>

<style lang="sass" scoped>
.project-card
  @include button

.project-img
  width: 100px

.project-year
  font-size: 15px
  color: $blueBoxBorder

.card-link
  @include link

.card-body
  @media screen and (max-width: 1299px)
    min-height: 300px
    max-width: 380px
  @media screen and (min-width: 1300px)
    min-height: 255px
    max-width: 450px

.card-link:hover
  color: black
  box-shadow: 5px 5px 25px black
</style>
