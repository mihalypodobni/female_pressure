<template>
  <div>
    <Header />
    <b-container fluid="lg" class="mt-5 px-0 f-body-container">
      <b-row class="justify-content-center w-100 mx-0 p-0">
        <!-- SHOW ALL THE PROJECTS -- ONLY WORKS IF THEY ARE MORE THAN 20 -->
        <section v-if="readMore">
          <b-row class="justify-content-center w-100 mx-0 p-0">
            <b-col
              v-for="(project, idx) in projects"
              :key="'project' + idx"
              cols="12"
              lg="6"
              class="my-2 mx-0"
              :class="idx % 2 === 0 ? 'pl-lg-0 pr-lg-2' : 'pr-lg-0 pl-lg-2'"
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
              lg="6"
              class="my-2 mx-0"
              :class="idx % 2 === 0 ? 'pl-lg-0 pr-lg-2' : 'pr-lg-0 pl-lg-2'"
            >
              <SpecialProjectsCard :project="project" />
            </b-col>
          </b-row>
        </section>
        <button class="btn mt-5" v-on:click="loadMore">Load More</button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SpecialProjectsCard from "./SpecialProjectsCard";
import { projects } from "@/assets/data/special-projects.js";
import Header from "@/components/header/Header";
import { mapMutations } from "vuex";

export default {
  components: {
    SpecialProjectsCard,
    Header,
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
    ...mapMutations(["SET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE("projects");
  },
};
</script>

<style lang="sass" scoped>
.btn
  @include button
</style>
