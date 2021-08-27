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
          <b-col cols="4" sm="3">alias</b-col>
          <b-col cols="8" sm="9">
            <div class="primary-text">{{ member.alias1 }}</div>
            <div class="alias secondary-text font-weight-bold">
              {{ member.alias2 }}
              <span v-if="member.alias3 !== null">, </span>
              {{ member.alias3 }}
            </div>
          </b-col>
          <b-col cols="4" sm="3">location</b-col>
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
        <b-icon-chevron-double-left
            :class="{'light-icon' : currentPage === 1}"
            class="mx=2 p-icon"
            @click="currentPage = 1"
        />
        <b-icon-chevron-left
            :class="{'light-icon' : currentPage === 1}"
            class="mx-2 p-icon"
            @click="decrease()"
        />
        <span
            v-for="index in computedPageList"
            class="mx-2 pagination-number"
            :class="index === currentPage ? 'pagination-number-current' : ''"
            :key="'page'+index"
            @click="currentPage = index"
        >
          {{ index }}
        </span>
        <b-icon-chevron-right
            :class="{'light-icon' : currentPage === computedPages}"
            class="mx-2 p-icon"
            @click="increase()"/>
        <b-icon-chevron-double-right
            :class="{'light-icon' : currentPage === computedPages}"
            class="mx-2 p-icon"
            @click="currentPage = computedPages"/>
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
  methods: {
    increase() {
      if (this.currentPage !== this.computedPages) {
        this.currentPage = this.currentPage + 1
      }
    },
    decrease() {
      if (this.currentPage !== 1) {
        this.currentPage = this.currentPage - 1
      }
    },
  },
  computed: {
    ...mapState({
      members: (state) => state.search.filteredMembers,
      authenticated: (state) => state.authentication.authenticated,
    }),
    computedMembers() {
      let x = this.perPage * (this.currentPage - 1)
      return this.members.filter((member, index) => {
        return index >= x && index < x + this.perPage
      })
    },
    computedPages() {
      let pages = Math.floor(this.members.length / this.perPage)
      if (this.members.length % this.perPage !== 0) {
        pages = pages + 1
      }
      return pages
    },
    computedPageList() {
      let pages = this.computedPages
      let pageList = []
      if (pages < 3) {
        for (let i = 1; i <= pages; i++) {
          pageList.push(i)
        }
        return pages
      } else if (this.currentPage  === 1) {
        pageList = [1,2,3]
      } else if (this.currentPage === this.computedPages) {
        pageList.push(this.currentPage - 2)
        pageList.push(this.currentPage - 1)
        pageList.push(this.currentPage)
      } else {
        pageList.push(this.currentPage - 1)
        pageList.push(this.currentPage)
        pageList.push(this.currentPage + 1)
      }
      return pageList
    }
  }
}

</script>

<style lang="sass" scoped>
.user-row
  border-bottom: 1px solid #2afec5
  border-top: 1px solid #2afec5
  height: 200px
  @media screen and (min-width: 600px)
    height: 150px

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

.pagination-number-current
  color: black !important

.pagination-number
  color: #2cfecf

  &:hover
    cursor: pointer
    color: black

.p-icon
  &:hover
    cursor: pointer

.light-icon
  color: lightgrey
</style>