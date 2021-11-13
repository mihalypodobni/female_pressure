<template>
  <b-container fluid="xl">
    <div class="home-body">
      <Header>
        female pressure
        <template #subtitle>
          database of people operating in electronic music
        </template>
      </Header>
      <b-container class="mt-5 f-body-container">
        <div class="mb-4">
          <b-button
              class="mr-3 home-button"
              @click="$router.push('/search')"
          >
            member search
          </b-button>
          <b-button
              class="home-button"
              @click="$router.push('/explore')"
          >
            interactive map
          </b-button>
        </div>
        <b-row>
          <b-col>
            <home-card>
              <template #title>
                randomly featured artist
              </template>
              here is the first card
            </home-card>
          </b-col>
          <b-col>
            <home-card>
              <template #title>
                latest female:pressure project
              </template>
              <b-row class="mx-0">
                <b-col cols="3">
                  <b-img-lazy :src="require('@/assets/special-projects-logos/2020-common.svg')"
                              class="menu-project-logo"/>
                </b-col>
                <b-col cols="9">
                  <div class="project-header">
                    common
                  </div>
                  <div class="project-description">
                    the f:p planet in the common multiverse is an online event space for talks, dj and live sets, and other a/v contributions from our network.
                  </div>
                </b-col>
              </b-row>
            </home-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>

<script>
import Header from "@/components/header/Header"
import HomeCard from "@/components/home/HomeCard"
import {mapActions} from 'vuex'

export default {
  components: {
    Header,
    HomeCard
  },
  methods: {
    ...mapActions({
      getMemberCount: 'getMemberCount'
    })
  },
  created() {
    this.getMemberCount()
  }
};
</script>

<style lang="sass" scoped>
.project-description
  font-size: 0.83em

.home-button
  @include button
</style>
