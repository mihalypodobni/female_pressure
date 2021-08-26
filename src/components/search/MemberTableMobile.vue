<template>
  <div class="f-body-container">
    <b-row>
      <b-col
          v-for="(member, index) in computedMembers"
          :key="'member' + index"
          cols="12"
          class="user-row"
          :class="index % perPage === 0 ? 'thicker-user-row' :''"
      >
        <b-row class="my-3">
          <b-col cols="4" sm="3">alias:</b-col>
          <b-col cols="8" sm="9">
            <div class="primary-text">{{ member.alias1 }}</div>
            <div class="alias secondary-text font-weight-bold">
              {{ member.alias2 }}
              <span v-if="member.alias3 !== null">, </span>
              {{ member.alias3 }}
            </div>
          </b-col>
          <b-col cols="4" sm="3">location:</b-col>
          <b-col cols="8" sm="9">
            <div class="primary-text">
              {{ member.location[0].split(";")[0] }} -
              {{ member.location[0].split(";")[2] }}
            </div>
            <div v-if="member.location.length > 1" class="secondary-text">
              {{ member.location[1].split(";")[0] }} -
              {{ member.location[1].split(";")[2] }}
            </div>
          </b-col>
          <b-col cols="4" sm="3">genres</b-col>
          <b-col cols="8" sm="9">
            <div>
              <span v-for="(genre, idx) in member.genres"
                    :key="genre + idx"
                    class="primary-text genre mr-1"
              >
                {{ genre }}
              </span>
            </div>
          </b-col>
          <b-col cols="4" sm="3">professions</b-col>
          <b-col cols="8" sm="9">
            <div>
              <span v-for="(profession, idx) in member.professions"
                    :key="profession + idx"
                    class="primary-text profession mr-1"
              >
                {{ profession }}
              </span>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-4">
      <b-col class="text-center">
        <span
            v-for="index in computedPages"
            class="mx-3"
            :key="'page'+index">
          {{ index }}
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
    }
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated,
    }),
    computedMembers() {
      let x = this.perPage * (this.currentPage - 1)
      return this.members.filter((member, index) => {
        console.log(index, index >= x && index < x + this.perPage)
        return index >= x && index < x + this.perPage
      })
    },
    computedPages() {
      let pages = this.members.length / this.perPage
      if (this.members.length % this.perPage !== 0) {
        pages = pages + 1
      }
      return pages
    }
  }
}

</script>

<style lang="sass" scoped>
.user-row
  border-bottom: 1px solid #2afec5
  border-top: 1px solid #2afec5

  &:hover
    background-color: whitesmoke
    cursor: pointer

.thicker-user-row
  border-top: 2px solid #2afec5 !important

.alias
  color: #36fbf6

.primary-text
  font-size: 13px

.secondary-text
  font-size: 10px

.genre
  background-color: #36fbf6
  padding-left: 2px
  padding-right: 2px

.profession
  background-color: #2afec5
  padding-left: 2px
  padding-right: 2px
</style>