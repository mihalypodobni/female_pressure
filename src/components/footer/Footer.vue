<template>
  <div class="footer-background">
    <b-container class="pt-5 pb-3 mt-5">
      <b-row>
        <b-col>
          <div class="font-weight-bolder">site navigation</div>
          <div v-for="(link, idx) in siteNav"
               :key="link.name + idx">
            <b-button variant="link"
                      class="p-0 m-0 link"
                      @click="$router.push({name: link.page}); SET_TAB(link.name)"
            >
              {{ link.name }}
            </b-button>
          </div>
        </b-col>
        <b-col>
          <div class="font-weight-bolder">resources</div>
          <div v-for="(link, idx) in resources"
               :key="link.name + idx">
            <b-button variant="link" class="p-0 m-0 link" @click="$router.push({name: link.page}); SET_TAB('')">
              {{ link.name }}
            </b-button>
          </div>
        </b-col>
        <b-col>
          <div class="font-weight-bolder">get in touch</div>
          <div class="my-2">info@femalepressure.net</div>
          <span v-for="(link, idx) in links"
                :key="link.icon + idx"
                variant="link" class="p-0 m-0">
            <br v-if="idx === 5">
            <b-button variant="link" class="p-0 m-0 link" :href="link.link" target="_blank">
              <font-awesome-icon :icon="['fab', link.icon]" size="lg" class="mx-2 my-2"/>
            </b-button>
          </span>
        </b-col>
      </b-row>
      <div class="text-center pt-3">
        <b-img src="../../assets/fp_large.png" class="footer-logo"></b-img>
        <span class="my-auto pl-4">&#169; 2019 - 2021 female:pressure -
          <b-button variant="link" class="p-0 m-0 link" href="#">GDPR</b-button> -
          <b-button variant="link" class="p-0 m-0 link" href="#">Impressum</b-button>
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      siteNav: [
        {name: "search", page: "Search"},
        {name: "projects", page: "Projects"},
        {name: "events", page: "Events"},
        {name: "links", page: "Links"},
        {name: "about", page: "About"},
        {name: "home", page: "Home"},
      ],
      resources: [
        {name: "code of conduct", page: "CoC"},
        {name: "blog", page: "Blog"},
        {name: "merch", page: "Merch"},
        {name: "press", page: "Press"},
        {name: "safe[r] space", page: "Safer Space"},
      ],
      links: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        {icon: "mixcloud", link: "https://www.mixcloud.com/female_pressure/"},
        {icon: "instagram", link: "https://www.instagram.com/femalepressure_official/"},
        {icon: "vimeo", link: "https://vimeo.com/groups/fpvisualpulse"},
        {icon: "tumblr", link: "https://femalepressure.tumblr.com/archive"},
        {icon: "youtube", link: "https://www.youtube.com/femalepressure"},
      ]
    }
  },
  methods: {
    ...mapMutations([
      "SET_TAB"
    ]),
  }
}
</script>

<style lang="sass" scoped>
.footer-background
  background-image: linear-gradient(white, $footer)

.link
  @include link

.footer-logo
  width: 45px
</style>