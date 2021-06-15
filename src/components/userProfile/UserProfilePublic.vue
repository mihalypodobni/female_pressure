<template>
  <b-container class="body-container">
    <div class="name-tab m-0">
      <h3>{{ profile.alias1 }}</h3>
    </div>
    <table class="mt-4">
      <tr>
        <th>location</th>
        <td>{{ profile.location }}</td>
      </tr>
      <tr>
        <th>work fields</th>
        <div class="d-flex">
          <td v-for="workField in profile.workFields" :key="workField.id">
            <button class="mr-2 workfield">{{ workField.title }}</button>
          </td>
        </div>
      </tr>
      <tr>
        <th>genres</th>
        <div class="d-flex">
          <div v-for="genre in profile.genres" :key="genre.id">
            <td>
              <button class="mr-2 genre">{{ genre.title }}</button>
            </td>
          </div>
        </div>
      </tr>
      <tr>
        <div class="d-flex">
          <div
              v-for="socialMedia in profile.socialMedias"
              :key="socialMedia.type"
          >
            <td>
              <a :href="socialMedia.link" target="_blank">
                <font-awesome-icon
                    :icon="['fab', socialMedia.type]"
                    size="2x"
                    class="icon mr-3"
                />
              </a>
            </td>
          </div>
        </div>
      </tr>
      <tr>
        <th>contact</th>
        <td>{{ profile.contact }}</td>
      </tr>
    </table>
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
          {id: "012", title: "producer"},
          {id: "013", title: "graphic designer"},
          {id: "014", title: "dj"},
        ],
        genres: [
          {id: "003", title: "techno"},
          {id: "004", title: "ambience"},
          {id: "005", title: "eletronic"},
          {id: "006", title: "experimental"},
        ],
        socialMedias: [
          {type: "twitter", link: "https://www.twitter.com/elizah"},
          {type: "instagram", link: "https://www.instagram.com/elizah"},
          {type: "facebook", link: "https://www.facebook.com/elizah"},
        ],
        contact: "eliza@gmail.com",
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.name-tab
  border-bottom: 2px solid $blueBoxBorder

th
  color: $blueBoxBorder
  font-weight: 400
  padding-right: 2em
  padding-bottom: 2em

td
  padding-bottom: 2em

button
  padding: 0px 10px
  font-weight: 400
  box-shadow: none
  border: none

  &:hover
    background-color: white

.workfield
  background-color: #00FFC5
  border: 2px solid #00ffc5

  &:hover
    color: #00FFC5

.genre
  background-color: #0FFBF6
  border: 2px solid #0FFBF6

  &:hover
    color: #0FFBF6

.icon
  color: #00C9B2
</style>