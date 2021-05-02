<template>
  <div class="footer-background">
    <b-container class="py-5 mt-5">
      <b-row>
        <b-col>
          <div class="font-weight-bolder">site navigation</div>
          <div v-for="(link, idx) in siteNav"
               :key="link.name + idx">
            <b-button variant="link" class="p-0 m-0">
              {{ link.name }}
            </b-button>
          </div>
        </b-col>
        <b-col>
          <div class="font-weight-bolder">resources</div>
          <div v-for="(link, idx) in resources"
               :key="link.name + idx">
            <b-button variant="link" class="p-0 m-0">
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
            <b-button variant="link" class="p-0 m-0">
              <font-awesome-icon :icon="['fab', link.icon]" size="lg" class="mr-3 my-2"/>
            </b-button>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteNav: [
        {name: "search"},
        {name: "projects"},
        {name: "events"},
        {name: "links"},
        {name: "about"},
        {name: "home"},
      ],
      resources: [
        {name: "code of conduct"},
        {name: "blog"},
        {name: "merch"},
        {name: "press"},
        {name: "safe[r] space"},
        {name: "home"},
      ],
      links: [
        {icon: "twitter", link: ""},
        {icon: "facebook", link: ""},
        {icon: "soundcloud", link: ""},
        {icon: "mixcloud", link: ""},
        {icon: "instagram", link: ""},
        {icon: "vimeo", link: ""},
        {icon: "tumblr", link: ""},
        {icon: "youtube", link: ""},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.footer-background
  background-image: linear-gradient(white, $footer)
</style>