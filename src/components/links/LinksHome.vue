<template>
  <b-container class="mt-5">
    <div class="accordion" role="tablist">
      <b-card
        no-body
        class="mb-1 main-card"
        v-for="(category, idx) in linksData"
        :key="category"
      >
        <b-card-header class="accordion-container" role="tab">
          <!-- CATEGORY TITLE -->
          <b-card-text
            block
            v-b-toggle="'accordion-' + idx"
            class="accordion-button"
          >
            <h5>
              <b>{{ category.categoryTitle }}</b>
            </h5>
          </b-card-text>
        </b-card-header>

        <!-- LINKS -->
        <b-collapse
          visible
          :id="'accordion-' + idx"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body
            v-for="link in category.links"
            :key="link.title"
            class="link-container d-flex justify-content-between align-items-end"
          >
            <b-link :src="link.url" class="link" target="_blank">{{
              link.title
            }}</b-link>
            <p class="m-0">{{ link.language }}</p>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      linksData: [
        {
          categoryTitle: "anti-racism reading and listening resources",
          links: [
            {
              title: "#blacklivesmatter community resource console",
              url: "https://blm.currents.fm/k",
              language: "EN",
            },
            {
              title: "anti-racism resources",
              url:
                "https://docs.google.com/document/d/1ko1dRVSUtpDntIZ5SrewALLhcMDuhe69Om31oOHIkh8/",
              language: "EN",
            },
            {
              title: "anti-racism resources for white people",
              url:
                "https://docs.google.com/document/d/1BRlF2_zhNe86SGgHa6-VlBO-QgirITwCTugSfKie5Fs/edit",
              language: "EN",
            },
            {
              title: "black lives matter - ressourcen auf deutsch",
              url:
                "https://docs.google.com/document/d/1BZk5sDngE8Z8twGzzbmAg78ful3zCGlzZ9W73Pguw-Y/edit",
              language: "DE",
            },
            {
              title: "how to support black lives in the uk",
              url:
                "https://docs.google.com/document/d/10iIz_pFB8DzPkwddc8dcmJdJ0ZMITfTs7lvs4uyusZk/edit",
              language: "EN",
            },
            {
              title:
                "links, ressourcen, texte, personen, organisationen in deutschland",
              url:
                "https://docs.google.com/document/d/1BZk5sDngE8Z8twGzzbmAg78ful3zCGlzZ9W73Pguw-Y/edit",
              language: "DE",
            },
            {
              title: "techno and its history",
              url: "https://dwellerforever.blog/library/",
              language: "EN",
            },
            {
              title:
                "what does it mean to be antiracist? how do we overcome white supremacy?",
              url:
                "https://multcolib.bibliocommons.com/list/share/114633184/1648115099",
              language: "EN",
            },
          ],
        },
        {
          categoryTitle: "archives of female:pressure radio shows",
          links: [
            {
              title: "female:pressure @ orange 94.0 / vienna",
              url: "https://soundcloud.com/femalepressure-orange940",
              language: "EN",
            },
            {
              title: "female frequencies @ reboot.fm / berlin",
              url:
                "https://cargocollective.com/female_frequencies/previous-shows/",
              language: "EN",
            },
            {
              title: "female:pressure @ frission radio / ireland",
              url:
                "https://www.mixcloud.com/frission/playlists/femalepressure-de/",
              language: "EN",
            },
            {
              title: "female:pressure @ byte.fm / hamburg",
              url: "https://www.byte.fm/sendungen/femalepressure/",
              language: "DE",
            },
            {
              title: "female:pressure radio @ 674.fm / cologne",
              url: "https://www.mixcloud.com/femalepressureradio/",
              language: "DE",
            },
            {
              title: "female:pressure @ refuge worldwide",
              url: "https://refugeworldwide.com/artists/female-pressure",
              language: "EN",
            },
            {
              title: "female:pressure @ resonance extra / london",
              url: "https://extra.resonance.fm/series/female-pressure",
              language: "EN",
            },
            {
              title: "female:pressure @ resonancias @ radio 3 rtve / spain",
              url: "www.rtve.es/alacarta/audios/resonancias/",
              language: "SP",
            },
            {
              title: "doctore xyramat @ fsk / hamburg [playlists only]",
              url: "https://www.fsk-hh.org/sendungen/doctore_xyramat",
              language: "DE",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.accordion-container
	border-bottom: 2px solid $blueBoxBorder
	background-color: white
	padding: 5px
	display: flex
	align-items: center

.main-card
	border: none

.link-container
	border-bottom: 1px solid $blueBoxBorder
	padding: 5px


.link
	@include link
</style>
