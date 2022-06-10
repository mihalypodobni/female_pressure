<template>
  <a :href="event.link" class="f-link">
    <div no-body class="event-card px-3 py-2">
      <div class="card-body m-0 p-1">
        <b-row class="p-0 mb-2 justify-content-start align-items-center">
            <b-col md="2" class="p-0 left">
                <h4 class="m-0">
                    {{ event.date }}
                </h4>
            </b-col>
            <b-col md="10" class="p-0 right">
                <div class="p-0">
                    <h4 class="m-0">
                        {{ event.event }} @ <b>{{ event.venue}}</b>
                    </h4>
                </div>
            </b-col>
        </b-row>
        <b-row class="justify-content-start align-items-center">
            <b-col md="2" class="left">
            </b-col>
            <b-col md="10" class="p-0 right">
                <div class="project-text">
                    {{ event.text }} <br>
                    more info at: <a class="eventLink" v-bind:href="'{{ event.link }}'">{{ event.linkText }}</a>
                </div>
            </b-col>
        </b-row>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style lang="sass" scoped>
.event-card
    border:none
    &:hover
        background-color: #00ffc5

.project-img
  width: 100px
  height: 100px
  @media screen and (max-width: 850px)
    width: 80px
    height: 80px

.project-text
  font-weight: 400
.card
    border:none
.card-body
  display:flex
  align-items: center
/* .left
    background-color: blue

/* .right */
/*     background-color: green */

a
    color:(black!important)
    text-decoration:none
    font-weight: bold

.f-link
  &:hover
    box-shadow: 5px 5px 25px black
</style>
