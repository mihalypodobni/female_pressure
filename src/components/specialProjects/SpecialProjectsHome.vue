<template>
  <b-container fluid="xl" class="px-0 body-container">
    <b-row class="justify-content-center w-100 mx-0 p-0">
      <b-col
          v-for="(project, idx) in projects"
          :key="'project' + idx"
          cols="12"
          xl="6"
          class="my-2 mx-0"
          :class="idx % 2 === 0 ? 'pl-xl-0 pr-xl-2' : 'pr-xl-0 pl-xl-2'"
      >
        <SpecialProjectsCard :project="project"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SpecialProjectsCard from "./SpecialProjectsCard";
import {projects} from "@/assets/data/special-projects.js";

export default {
  components: {
    SpecialProjectsCard,
  },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>
