<template>
  <b-container class="mt-5 body-container">
    <div class="accordion" role="tablist">
      <b-card
        no-body
        class="mb-1 main-card"
        v-for="(category, idx) in linksData"
        :key="category.categoryTitle"
      >
        <b-card-header
          class="accordion-container mb-3 accordion-button h5 py-1 px-2"
          role="tab"
          block
          v-b-toggle="'accordion-' + idx"
        >
          <!-- CATEGORY TITLE -->

          <b>{{ category.categoryTitle }}</b>
        </b-card-header>

        <!-- LINKS -->
        <b-collapse
          :id="'accordion-' + idx"
          accordion="my-accordion"
          role="tabpanel"
          class="mb-3"
        >
          <a
            v-for="link in category.links"
            :href="link.url"
            :key="link.title"
            class="link-container d-flex justify-content-between align-items-end link"
            target="_blank"
          >
            {{ link.title }}

            <p class="m-0">{{ link.language }}</p>
          </a>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { links } from "@/assets/data/links";

export default {
  data() {
    return {
      linksData: links,
    };
  },
  mounted() {
    console.log(this.$route.params.category);
  },
};
</script>

<style lang="sass" scoped>
.accordion-container
  border: 2px solid $blueBoxBorder
  background-color: white
  padding: 5px 15px
  display: flex
  align-items: center


.accordion-button
  display: flex
  align-items: center
.main-card
  border: none

.link-container
  border-bottom: 1px solid $blueBoxBorder
  padding: 5px

.link-container:hover
  background-color: $blueBoxBorder
  // padding-left: 15px

.link
  color: black

.link:hover
  color: black
  text-decoration: none
</style>
