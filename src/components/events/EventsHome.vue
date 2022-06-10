<template>
  <div>
    <Header>
      events
    </Header>
    <b-container class="mt-5 f-body-container">
      <b-row class="w-100 mx-0 mb-4 p-0">
        <h3>next female:pressure events</h3>
      </b-row>
      <b-row class="justify-content-center w-100 mx-0 p-0">
          <b-row class="justify-content-center w-100 mx-0 p-0">
            <b-col
              v-for="(event, idx) in events"
              :key="'event' + idx"
              cols="12"
              lg="12"
              class="mx-0 eventCardContainer p-0"
            >
              <EventsCard :event="event" />
            </b-col>
          </b-row>
<!--        <button class="f-button mt-5" v-on:click="loadMore">Load More</button>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { events } from "@/assets/data/events.js";
import EventsCard from "@/components/events/EventsCard.vue";
import Header from "@/components/header/HeaderComp";

export default {
  components: {
    EventsCard,
    Header,
  },
  data() {
    return {
      events: events,
      readMore: false,
    };
  },
  // BUTTON CLICK FOR LOAD MORE
  methods: {
    loadMore: function () {
      if (this.events.length > 20) {
        this.readMore = true;
      }
    },
  }
};
</script>

<style lang="sass" scoped>

::v-deep 
  .eventCardContainer 
    border-bottom: 2px solid #00ffc5
    &:first-child 
      border-top: 2px solid #00ffc5

</style>