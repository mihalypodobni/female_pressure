<template>
 <main>
   <b-container class="mt-3"> 
    <!-- <h1 class="page-title">Special projects</h1> -->
    <ProjectCard :projects="projectsData"/>
   </b-container>
    
  </main>
</template>

<script>
import ProjectCard from "./ProjectCard"

export default {
  name: "SpecialProjectsHome",
  components: {
    ProjectCard
  },

  data() {
    return {
      projectsData: [
        {
          img: "fp-podcast",
          title: " refuge radio show - since 2021",
          text: "the latest addition to our monthly radio shows: on refuge worldwide, we present curated dj mixes in a wide variety of genres.",
          link: "https://refugeworldwide.com/artists/female-pressure",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "COMMON planet - since 2020",
          text: "the f:p planet in the COMMON multiverse is an online event space for talks, dj and live sets, and other a/v contributions from our network.",
          link: "https://a.currents.fm/common/planet/2ejGx3vlM7THv1V0hPNp",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "FACTS 2020",
          text: "the latest and most comprehensive edition of our FACTS survey which is a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
          link: "https://femalepressure.wordpress.com/FACTS",
          socialMedia: [
          ]
        }, 
        {
          img: "fp-podcast",
          title: "podcast - since 2018",
          text: "in this biweekly podcast you’ll find the most stunning sounds from around the world and a lot of good tracks produced by f:p artists.",
          link: "https://femalepressure.wordpress.com/podcast/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "FACTS 2017",
          text: "our third FACTS survey marks a huge step forward from the previous editions as it complies with academic standards. it comes with proper description of the methodology and an extensive discussion part.",
          link: "https://femalepressure.wordpress.com/facts2017/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "solidarity w/ rojava compilation 2016",
          text: "a support compilation for the women in Rojava, who build a new society, striving for social, racial and ethnic justice, religious freedom, ecological principles and gender equality.",
          link: "http://www.femalepressure.net/rojava.html",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "visualpulse group - since 2015",
          text: "f:p visualpulse aims to encourage exchange/discussion and further the sharing of knowledge and experience specifically in the field of video art.",
          link: "https://vimeo.com/groups/fpvisualpulse",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "revellers compilation 2015",
          text: "after a media surge surrounding our visibility project mentioned by Bjork, Fader, LA Weekly, we scheduled an exclusive release on beatport.",
          link: "https://soundcloud.com/revellerrecords/sets/femalepressure-revellers-comp-1-25-jun-beatport-exclusive",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: " visibility tumblr 2015",
          text: "an image based collection of women*, non-binary and transgender artists in music production & performing arts in their working environment, curated by AGF.",
          link: "https://femalepressure.tumblr.com/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "FACTS 2015",
          text: "second edition of the FACTS survey which is a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
          link: "https://femalepressure.wordpress.com/facts-2015-statement/facts-survey2015/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "pussy riot freedom compilation 2013",
          text: "support compilation from our network calling for freedom for the then imprisoned Pussy Riot members Nadezhda Tolokonnikova and Maria Alyokhina.",
          link: "http://www.femalepressure.net/pussyriot.html",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "perspectives festival 2013",
          text: "our call for the collective revision of female* representation in electronic music and digital arts. “we need – and paying audiences deserve – invigorating and entertaining diversity!”",
          link: "https://femalepressure.wordpress.com/festival2013/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "FACTS 2013",
          text: "the first FACTS survey which then became a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
          link: "https://femalepressure.wordpress.com/facts-graphic/",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "die vorspielservice - since 2009",
          text: "famous djs play and comment selected records from their illimitable archives live for you. and you can buy any record at a killer price! the most exclusive music service on earth!",
          link: "http://www.femalepressure.net/vs.html",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "japan tour 2009",
          text: "celebrating the 10th anniversary of our network, we wanted to reflect the global character of female:pressure by organizing a concert tour through Japan.",
          link: "http://www.femalepressure.net/japan.html",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "open:sounds dvd1 2008",
          text: `to counteract the one-sided focus on djs and musicians, we wanted to offer "our" visual artists the overdue possibility to present their work adequately.`,
          link: "http://femalepressure.net/dvd.html",
          socialMedia: [
          ]
        },
        {
          img: "fp-podcast",
          title: "open:sounds 2005-2009",
          text: `open:sounds was created as an online production platform for the female:pressure community to exchange sounds and remix each others' tracks.`,
          link: "http://www.femalepressure.net/opensounds.html",
          socialMedia: [
          ]
        }, 
      ]
    }
  },
}
</script>


