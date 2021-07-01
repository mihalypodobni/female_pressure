<template>
  <a :href="project.link" class="card-link link">
    <b-card no-body class="project-card px-3 py-2">
      <div class="card-body m-0">
        <b-row class="p-0 justify-content-start align-items-start">
          <b-col class="p-0 h-100"
                 :class="project.img === '2009-japan.svg' ? 'bottom-shift' : ''"
                 cols="5" sm="3" md="2" lg="4">
            <b-img
              :src="require('@/assets/special-projects-logos/' + project.img)"
              :alt="project.title + ' logo'"
              class="project-img mt-1 mr-2 p-0"
              :class="project.img === '2009-japan.svg' ? 'japan' : ''"
            />
          </b-col>
          <b-col cols="7" class="p-0 mh-50 mb-2">
            <div class="ml-3 mt-1 p-0">
              <h4 class="m-0">
                <b>{{ project.title }}</b>
              </h4>
              <p class="project-year mb-2">
                <b>{{ project.year }}</b>
              </p>
              <div v-if="!$store.state.isMobile" class="project-text p-0">
                {{ project.text }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row v-if="$store.state.isMobile">
          <div class="project-text p-0">
            {{ project.text }}
          </div>
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
};
</script>

<style lang="sass" scoped>
.project-card
  @include card-button
  border-radius: 0
  border: none

.project-img
  width: 100px
  height: 100px
  @media screen and (max-width: 1024px)
    margin-bottom: 20px
    width: 80px
    height: 80px

.japan
  width: 100px
  height: 139px

.bottom-shift
  bottom: 30px

.project-year
  font-size: 15px
  font-weight: 600
  color: $blueBoxBorder

.project-text
  font-weight: 400

.card-link
  @include link

.card-body
  @media screen and (min-width: 992px)
    min-height: 385px
  @media screen and (min-width: 1200px)
    min-height: 340px
  @media screen and (min-width: 1300px)
    min-height: 305px

.card-link:hover
  color: black
  box-shadow: 5px 5px 25px black
</style>
