<template>
  <b-container class="body-container">
    <div class="accordion" role="tablist">
      <b-card
        no-body
        class="mb-1 main-card"
        v-for="(question, idx) in faqData"
        :key="question.title"
      >
        <b-card-header
          class="accordion-container mb-3 accordion-button h5 py-1 px-2"
          role="tab"
          v-b-toggle="'accordion-' + idx"
        >
          <b class="question-title">{{ question.title }}</b>
        </b-card-header>

        <!-- LINKS -->
        <b-collapse
          :id="'accordion-' + idx"
          accordion="my-accordion"
          role="tabpanel"
          class="mb-3"
          visible
        >
          <p class="m-1">{{ question.answer }}</p>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { faq } from "@/assets/data/faq";

export default {
  data() {
    return {
      faqData: faq,
    };
  },
};
</script>

<style lang="sass" scoped>
.accordion-container
    border: 2px solid rgba(153, 252, 198, 0.5)
    background-color: white
    padding: 5px 15px
    display: flex
    align-items: center
    cursor: pointer
    &:hover
        background-color: #99fcc6

.accordion-button
    display: flex
    align-items: center

.main-card
    border: none
    background: none
    border-radius: 0px

.link-container
    border-bottom: 1px solid rgba(153, 252, 198, 0.5)
    padding: 5px
    &:hover
        background-color: #99fcc6

.question-title
    cursor: pointer

.link
    color: black

.link:hover
    color: black
    text-decoration: none
</style>
