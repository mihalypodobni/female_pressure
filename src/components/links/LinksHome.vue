<template>
  <b-container class="mt-5 body-container">
    <div class="accordion" role="tablist">
      <b-card
          no-body
          class="mb-1 main-card"
          v-for="(category, idx) in linksData"
          :key="category.categoryTitle"
      >
        <b-card-header class="accordion-container" role="tab">
          <!-- CATEGORY TITLE -->
          <b-card-text
              block
              v-b-toggle="'accordion-' + idx"
              class="accordion-button"
          >
            <h5>
              <b>{{ category.categoryTitle }}</b>
            </h5>
          </b-card-text>
        </b-card-header>

        <!-- LINKS -->
        <b-collapse
            visible
            :id="'accordion-' + idx"
            accordion="my-accordion"
            role="tabpanel"
        >
          <b-card-body
              v-for="link in category.links"
              :key="link.title"
              class="link-container d-flex justify-content-between align-items-end"
          >
            <b-link :src="link.url" class="link" target="_blank">
              {{ link.title }}
            </b-link>
            <p class="m-0">{{ link.language }}</p>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import {links} from "@/assets/data/links";

export default {
  data() {
    return {
      linksData: links
    }
  },
};
</script>

<style lang="sass" scoped>
.accordion-container
  border-bottom: 2px solid $blueBoxBorder
  background-color: white
  padding: 5px
  display: flex
  align-items: center

.main-card
  border: none

.link-container
  border-bottom: 1px solid $blueBoxBorder
  padding: 5px

.link-container:hover
  background-color: $blueBoxBorder
  padding-left: 15px

.link
  color: black

.link:hover
  color: black
  text-decoration: none
</style>
