<template>
  <div>
    <b-container class="pt-5 pb-3 mt-5">
      <b-row>
        <b-col>
          <div class="font-weight-bolder mb-1">site navigation</div>
          <div v-for="(link, idx) in siteNav" :key="link.name + idx">
            <b-button
                variant="link"
                class="p-0 m-0 footer-link"
                @click="$router.push({ name: link.page })"
            >
              {{ link.name }}
            </b-button>
          </div>
        </b-col>
        <b-col>
          <div class="font-weight-bolder mb-1">resources</div>
          <div v-for="(link, idx) in resources" :key="link.name + idx">
            <b-button
                v-if="link.link"
                variant="link"
                class="p-0 m-0 footer-link"
                :href="link.link"
                target="_blank"
            >
              {{ link.name }}
            </b-button>
            <b-button
                v-else
                variant="link"
                class="p-0 m-0 footer-link"
                @click=" $router.push({ name: link.page })"
            >
              {{ link.name }}
            </b-button>
          </div>
        </b-col>
        <b-col>
          <div class="font-weight-bolder">get in touch</div>
          <div class="mt-1 mb-2">info@femalepressure.net</div>
          <span
              v-for="(link, idx) in links"
              :key="link.icon + idx"
              class="p-0 m-0"
          >
            <br v-if="idx === 5"/>
            <b-button
                variant="link"
                class="p-0 m-0 footer-link"
                :href="link.link"
                target="_blank"
            >
              <font-awesome-icon
                  :icon="['fab', link.icon]"
                  size="lg"
                  class="mx-2 my-2 icon-background-size"
                  v-if="link.fontAwesome"
              />
              <b-img v-else
                     :src="require('@/assets/icons/' + link.icon)"
                     class="icon-background-size mx-2 my-2"
              ></b-img>
            </b-button>
          </span>
        </b-col>
      </b-row>
      <div class="text-center pt-3">
        <b-img src="@/assets/fp-main-logo.svg" class="footer-logo"></b-img>
        <span class="my-auto pl-4"
        >&#169; 2021 female:pressure -
          <b-button variant="link" class="p-0 m-0 footer-link" @click="$router.push({name: 'GDPR' })">GDPR</b-button>
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
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
        {name: "faq", page: "FAQ"},
        {name: "safe[r] space", link: "https://too-many.org/code-of-conduct/"},
        {name: "feedback", page: "Feedback"},
      ],
      links: [
        {icon: "twitter", link: "https://twitter.com/female_pressure", fontAwesome: true},
        {
          icon: "instagram.svg",
          link: "https://www.instagram.com/femalepressure_official/",
          fontAwesome: false
        },
        {icon: "facebook", link: "https://www.facebook.com/femalepressure", fontAwesome: true},
        {icon: "youtube", link: "https://www.youtube.com/femalepressure", fontAwesome: true},
        {icon: "soundcloud.svg", link: "https://soundcloud.com/femalepressure", fontAwesome: false},

        {icon: "currents.svg", link: "https://a.currents.fm/g/femalepressure", fontAwesome: false},
        {icon: "wordpress", link: "https://femalepressure.wordpress.com/", fontAwesome: true},
        {icon: "bandcamp", link: "https://femalepressure.bandcamp.com/", fontAwesome: true},
        {icon: "resident-advisor.svg", link: "https://ra.co/labels/16342", fontAwesome: false},
        {icon: "mixcloud", link: "https://www.mixcloud.com/female_pressure/", fontAwesome: true},
      ],
    };
  },
};
</script>

<style lang="sass" scoped>

.footer-link
  @include footer-link

.footer-logo
  width: 45px
  height: 45px

.icon-background-size
  width: 22px !important
  height: 22px !important
</style>
