<template>
  <b-container class="body-container">
    <div class="name-tab m-0">
      <h3>{{ profile.alias1 }}</h3>
    </div>
    <b-table-simple class="mt-4">
      <b-tr>
        <b-th>location</b-th>
        <b-td>{{ profile.location }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>work fields</b-th>
        <div class="d-flex">
          <b-td v-for="workField in profile.workFields" :key="workField.id">
            <button class="mr-2 workfield">{{ workField.title }}</button>
          </b-td>
        </div>
      </b-tr>
      <b-tr>
        <b-th>genres</b-th>
        <div class="d-flex">
          <div v-for="genre in profile.genres" :key="genre.id">
            <b-td>
              <button class="mr-2 genre">{{ genre.title }}</button>
            </b-td>
          </div>
        </div>
      </b-tr>
      <b-tr>
        <div class="d-flex">
          <div
            v-for="socialMedia in profile.socialMedias"
            :key="socialMedia.type"
          >
            <b-td>
              <a :href="socialMedia.link" target="_blank">
                <font-awesome-icon
                  :icon="['fab', socialMedia.type]"
                  size="2x"
                  class="icon mr-3"
                />
              </a>
            </b-td>
          </div>
        </div>
      </b-tr>
      <b-tr>
        <b-th>contact</b-th>
        <b-td>{{ profile.contact }}</b-td>
      </b-tr>
    </b-table-simple>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        alias1: "elizah",
        location: "Berlin, Germany",
        workFields: [
          { id: "012", title: "producer" },
          { id: "013", title: "graphic designer" },
          { id: "014", title: "dj" },
        ],
        genres: [
          { id: "003", title: "techno" },
          { id: "004", title: "ambience" },
          { id: "005", title: "eletronic" },
          { id: "006", title: "experimental" },
        ],
        socialMedias: [
          { type: "twitter", link: "https://www.twitter.com/elizah" },
          { type: "instagram", link: "https://www.instagram.com/elizah" },
          { type: "facebook", link: "https://www.facebook.com/elizah" },
        ],
        contact: "eliza@gmail.com",
      },
    };
  },
};
</script>

<style  lang="sass" scoped>
.name-tab
  border-bottom: 2px solid $blueBoxBorder

th
  color: $blueBoxBorder
  font-weight: 400
  padding-right: 2em
  padding-bottom: 1em
  border: none

td
  padding-bottom: 1em
  border: none

button
  padding: 0px 10px
  font-weight: 400
  box-shadow: none
  border: none
  &:hover
    text-shadow: 0px 0px 1px black

.workfield
  background-color: #00FFC5
  border: 2px solid #00ffc5
  // &:hover
  //   color: #00FFC5

.genre
  background-color: #0FFBF6
  border: 2px solid #0FFBF6
  // &:hover
  //   color: #0FFBF6

.icon
  color: #00C9B2
  &:hover
    color: #00ffc5
</style>