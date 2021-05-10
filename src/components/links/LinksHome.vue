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
            <h6>
              <b>{{ category.categoryTitle }}</b>
            </h6>
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
        {
          categoryTitle: "online magazines, blogs and podcasts in english",
          links: [
            {
              title: "anattitude",
              url: "http://www.anattitude.net/",
            },
            {
              title: "autogenesis",
              url: "https://www.autogenesis.org/",
            },
            {
              title: "b gyrl",
              url: "www.b-gyrl.com",
            },
            {
              title: "bit rosie",
              url: "http://www.bitrosie.com/",
            },
            {
              title: "bitch media",
              url: "http://www.bitrosie.com/",
            },
            {
              title: "black girl dangerous",
              url: "www.blackgirldangerous.org",
            },
            {
              title: "crack in the road",
              url: "https://www.crackintheroad.com/",
            },
            {
              title: "create digital music",
              url: "https://cdm.link/",
            },
            {
              title: "dbs berlin dialogues",
              url: "https://catalyst-berlin.com/stories",
            },
            {
              title: "dweller",
              url: "https://dwellerforever.blog/",
            },
            {
              title: "eql blog",
              url: "https://makeiteql.com/blog",
            },
            {
              title: "fembot5",
              url: "https://fembot5.wordpress.com/",
            },
            {
              title: "feminist music geek",
              url: "https://djmusicgeek.com/",
            },
            {
              title: "feministing",
              url: "http://feministing.com/",
            },
            {
              title: "femmecult - women in electronica",
              url: "www.femmecult.com",
            },
            {
              title: "femmusic",
              url: "https://femmusic.com/wp/",
            },
            {
              title: "grapefruits",
              url: "http://grapefruits.online/",
            },
            {
              title: "grrrl zine network",
              url: "http://www.grrrlzines.net/",
            },

            {
              title: "interdependence",
              url: "https://interdependence.fm/",
            },
            {
              title: "kitmonsters",
              url: "http://kitmonsters.com/",
            },
            {
              title: "lazy day deaf",
              url: "http://lastdaydeaf.com/",
            },
            {
              title: "listen",
              url: "https://www.listenlistenlisten.org/",
            },
            {
              title: "liz pelly",
              url: "https://lizpelly.com/writing",
            },
            {
              title: "mellowtown",
              url: "http://www.mellowtown.de/",
            },
            {
              title: "music is her passion",
              url: "https://www.equality-empowerment.com/",
            },
            {
              title: "nerd girls - herstory of eletronic music",
              url: "https://poemproducer.com/nerdgirls/",
            },
            {
              title: "nevertrust cockrock",
              url: "https://nevertrustcockrock.wordpress.com/",
            },
            {
              title: "ny times on godmothers in electronic music",
              url:
                "https://www.nytimes.com/2012/11/25/arts/music/rediscovering-the-electronic-music-godmothers.html?_r=0",
            },
            {
              title: "pile rats",
              url: "http://pilerats.com/",
            },
            {
              title: "resonances and trasitions",
              url: "https://resonancesandtransitions.wordpress.com/",
            },
            {
              title: "right chord music",
              url: "www.rightchordmusic.co.uk",
            },
            {
              title: "texas and glory",
              url: "https://www.texas-glory.com/blog/",
            },
            {
              title: "the sampler",
              url: "https://thesampler.org/",
            },
            {
              title: "tom tom magazine",
              url: "https://tomtommag.com/",
            },
            {
              title: "worlds gone weird",
              url: "https://worldsgoneweird.wordpress.com/",
            },
          ],
        },
        {
          categoryTitle:
            "online magazines, blogs and podcasts in other languages",
          links: [
            {
              title: "pause musicale",
              url: "http://pausemusicale.com/",
              language: "FR",
            },
            {
              title: "an.schläge",
              url: "https://anschlaege.at/",
              language: "DE",
            },
            {
              title: "de:bug",
              url: "https://de-bug.de/",
              language: "DE",
            },
            {
              title: "die standard",
              url: "https://www.derstandard.at/consent/tcf/diestandard",
              language: "DE",
            },
            {
              title: "femgeeks",
              url: "https://femgeeks.de/",
              language: "DE",
            },
            {
              title: "fiber",
              url: "http://www.fibrig.net/",
              language: "DE",
            },
            {
              title: "kleinerdrei",
              url: "http://kleinerdrei.org/",
              language: "DE",
            },
            {
              title: "malmoe",
              url: "https://www.malmoe.org/",
              language: "DE",
            },
            {
              title: "melodiva",
              url: "https://www.melodiva.de/",
              language: "DE",
            },
            {
              title: "missy magazine",
              url: "https://missy-magazine.de/",
              language: "DE",
            },
            {
              title: "skug",
              url: "https://skug.at/",
              language: "DE",
            },
            {
              title: "soulguru",
              url: "https://soulgurusounds.com/",
              language: "DE",
            },
            {
              title: "prllmusic",
              url: "https://www.prllmusic.com/",
              language: "RU",
            },
            {
              title: "transistora",
              url: "https://transistora.com.es/",
              language: "ES",
            },
            {
              title: "hymn",
              url: "https://hymn.se/",
              language: "SE",
            },
          ],
        },
        {
          categoryTitle: "music production, gear and tech stuff",
          links: [
            {
              title: "čipke",
              url: "https://cipkeen.wordpress.com/",
              language: "ENG",
            },
            {
              title: "cynthia- girls on synth",
              url: "https://cipkeen.wordpress.com/",
              language: "ENG",
            },
            {
              title: "dbs music",
              url: "https://catalyst-berlin.com/music",
              language: "ENG",
            },
            {
              title: "female audio youtubers you need to follow",
              url:
                "https://lnamusic.com/2020/04/15/female-audio-youtubers-you-need-to-follow/",
              language: "ENG",
            },
            {
              title: "fem synth lab",
              url:
                "https://womenscenterforcreativework.com/events/fem-synth-lab/",
              language: "ENG",
            },
            {
              title: "femme house",
              url: "https://www.thisisfemmehouse.com/",
              language: "ENG",
            },
            {
              title: "flower electronics",
              url: "https://flowerelectronics.com/",
              language: "ENG",
            },
            {
              title: "gender amplified",
              url: "https://genderamplified.org/",
              language: "ENG",
            },
            {
              title: "girls make beats",
              url: "https://www.girlsmakebeats.org/",
              language: "ENG",
            },
            { title: "", url: "", language: "" },
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

.link-container:hover
	background-color: $blueBoxBorder
	padding-left: 15px

.link
	color: black

.link:hover
	color: black
	text-decoration: none
</style>
