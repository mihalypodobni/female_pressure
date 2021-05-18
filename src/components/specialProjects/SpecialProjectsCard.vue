<template>
  <a :href="project.link" class="card-link link">
    <b-card class="p-0 project-card">
      <b-card-body class="p-0">
        <b-row>
          <b-col class="text-left d-flex align-items-center" cols="3">
            <div class="d-flex align-items-center">
              <b-img
                :src="getImgUrl(project.img)"
                :alt="project.title + ' logo'"
                class="project-img"
              />
            </div>
          </b-col>
          <b-col cols="12" xl="9" class="p-2 mh-50">
            <div class="m-4 ">
              <h4>
                {{ project.title }}
                <span class="project-year">{{ project.year }}</span>
              </h4>

              <div>
                {{ project.text }}
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card-body>
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
      let images = require.context("./assets/");
      return images("./" + img);
    },
  },
};
</script>

<style lang="sass" scoped>
.project-card
  min-height: 340px
  border: 3px solid $blueBoxBorder
  box-shadow: 0px 0px 15px grey
  color: black

.project-img
  width: 100px
  margin: 10px


.project-year
  font-size: 15px
  color: $blueBoxBorder



.card-link
  @include link

.card-link:hover
  color: black
  box-shadow: 5px 5px 25px black
</style>
