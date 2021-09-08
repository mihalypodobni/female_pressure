<template>
  <a :href="project.link" class="f-link">
    <b-card no-body class="project-card px-3 py-2">
      <div class="card-body m-0 p-1">
        <b-row class="p-0 justify-content-start align-items-center">
          <b-col class="p-0 mr-2 ml-3"
                 :class="project.img === '2009-japan.svg' ? 'bottom-shift' : ''"
                 cols="3" sm="2" md="2" lg="3">
            <b-img
              :src="require('@/assets/special-projects-logos/' + project.img)"
              :alt="project.title + ' logo'"
              class="project-img mt-1 my-2 p-0"
              :class="project.img === '2009-japan.svg' ? 'japan' : ''"
            />
          </b-col>
          <b-col cols="7" sm="7" md="9" lg="7" class="p-0 my-3">
            <div class="p-0">
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
        <b-row class="justify-content-center align-items-center" v-if="$store.state.isMobile">
          <div class="project-text p-2 mt-2">
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
  @media screen and (max-width: 850px)
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

.card-body
  display:flex
  align-items: center
  @media screen and (min-width: 992px)
    min-height: 275px
  @media screen and (min-width: 1170px)
    min-height: 247px
  @media screen and (min-width: 1300px)
    min-height: 260px

.f-link
  &:hover
    box-shadow: 5px 5px 25px black
</style>
