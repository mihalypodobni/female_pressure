<template>
  <b-container fluid="xl" class="px-0 body-container">
    <b-row class="justify-content-center w-100 mx-0 p-0">
      <!-- SHOW ALL THE PROJECTS -- ONLY WORKS IF THEY ARE MORE THAN 20 -->
      <section v-if="readMore">
        <b-row class="justify-content-center w-100 mx-0 p-0">
          <b-col
            v-for="(project, idx) in projects"
            :key="'project' + idx"
            cols="12"
            xl="6"
            class="my-2 mx-0"
            :class="idx % 2 === 0 ? 'pl-xl-0 pr-xl-2' : 'pr-xl-0 pl-xl-2'"
          >
            <SpecialProjectsCard :project="project" />
          </b-col>
        </b-row>
      </section>

      <!-- SHOW ONLY THE FIRST 20 PROJECTS -->
      <section v-else>
        <b-row class="justify-content-center w-100 mx-0 p-0">
          <b-col
            v-for="(project, idx) in projects.slice(0, 20)"
            :key="'project' + idx"
            cols="12"
            xl="6"
            class="my-2 mx-0"
            :class="idx % 2 === 0 ? 'pl-xl-0 pr-xl-2' : 'pr-xl-0 pl-xl-2'"
          >
            <SpecialProjectsCard :project="project" />
          </b-col>
        </b-row>
      </section>
      <button class="btn mt-5" v-on:click="loadMore">Load More</button>
    </b-row>
  </b-container>
</template>

<script>
import SpecialProjectsCard from "./SpecialProjectsCard";
import { projects } from "@/assets/data/special-projects.js";

export default {
  components: {
    SpecialProjectsCard,
  },
  data() {
    return {
      projects: projects,
      readMore: false,
    };
  },
  // BUTTON CLICK FOR LOAD MORE
  methods: {
    loadMore: function () {
      if (this.projects.length > 20) {
        this.readMore = true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.btn
  @include button
</style>
