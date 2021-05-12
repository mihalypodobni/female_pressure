<template>
	<b-container fluid="xl" class="px-0">
		<b-row class="justify-content-center w-100 mx-0 p-0 ">
			<b-col
				v-for="(project, idx) in projects"
				:key="'project' + idx"
				cols="12"
				lg="6"
<<<<<<< HEAD
				class="p-2"
=======
				class="my-3 mx-0"
        :class="idx % 2 === 0 ? 'pl-lg-0 pr-lg-2' : 'pr-lg-0 pl-lg-2'"
>>>>>>> 389929d3dcfaf8cb4c73d7c7f0e4427df6cc5687
			>
				<SpecialProjectsCard :project="project" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import SpecialProjectsCard from "./SpecialProjectsCard";

	export default {
		components: {
			SpecialProjectsCard,
		},

		data() {
			return {
				projects: [
					{
						img: "2021-refuge.svg",
						title: " refuge radio show",
						text:
							"the latest addition to our monthly radio shows: on refuge worldwide, we present curated dj mixes in a wide variety of genres.",
						link: "https://refugeworldwide.com/artists/female-pressure",
						year: "since 2021",
					},
					{
						img: "2015-FACTS.svg",
						title: "COMMON planet",
						text:
							"the f:p planet in the COMMON multiverse is an online event space for talks, dj and live sets, and other a/v contributions from our network.",
						link: "https://a.currents.fm/common/planet/2ejGx3vlM7THv1V0hPNp",
						year: "since 2020",
					},
					{
						img: "2020-FACTSalternative.svg",
						title: "FACTS",
						text:
							"the latest and most comprehensive edition of our FACTS survey which is a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
						link: "https://femalepressure.wordpress.com/FACTS",
						year: "2020",
					},
					{
						img: "fp-podcast-logo.svg",
						title: "podcast",
						text:
							"in this biweekly podcast you’ll find the most stunning sounds from around the world and a lot of good tracks produced by f:p artists.",
						link: "https://femalepressure.wordpress.com/podcast/",
						year: "since 2018",
					},
					{
						img: "2015-FACTS.svg",
						title: "FACTS",
						text:
							"our third FACTS survey marks a huge step forward from the previous editions as it complies with academic standards. it comes with proper description of the methodology and an extensive discussion part.",
						link: "https://femalepressure.wordpress.com/facts2017/",
						year: "2017",
					},
					{
						img: "2015-FACTS.svg",
						title: "solidarity w/ rojava compilation",
						text:
							"a support compilation for the women in Rojava, who build a new society, striving for social, racial and ethnic justice, religious freedom, ecological principles and gender equality.",
						link: "http://www.femalepressure.net/rojava.html",
						year: "2016",
					},
					{
						img: "2015-FACTS.svg",
						title: "visualpulse group",
						text:
							"f:p visualpulse aims to encourage exchange/discussion and further the sharing of knowledge and experience specifically in the field of video art.",
						link: "https://vimeo.com/groups/fpvisualpulse",
						year: "since 2015",
					},
					{
						img: "2015-FACTS.svg",
						title: "revellers compilation",
						text:
							"after a media surge surrounding our visibility project mentioned by Bjork, Fader, LA Weekly, we scheduled an exclusive release on beatport.",
						link:
							"https://soundcloud.com/revellerrecords/sets/femalepressure-revellers-comp-1-25-jun-beatport-exclusive",
						year: "2015",
					},
					{
						img: "2015-FACTS.svg",
						title: " visibility tumblr",
						text:
							"an image based collection of women*, non-binary and transgender artists in music production & performing arts in their working environment, curated by AGF.",
						link: "https://femalepressure.tumblr.com/",
						year: "2015",
					},
					{
						img: "2015-FACTS.svg",
						title: "FACTS",
						text:
							"second edition of the FACTS survey which is a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
						link:
							"https://femalepressure.wordpress.com/facts-2015-statement/facts-survey2015/",
						year: "2015",
					},
					{
						img: "2015-FACTS.svg",
						title: "pussy riot freedom compilation ",
						text:
							"support compilation from our network calling for freedom for the then imprisoned Pussy Riot members Nadezhda Tolokonnikova and Maria Alyokhina.",
						link: "http://www.femalepressure.net/pussyriot.html",
						year: "2013",
					},
					{
						img: "2015-FACTS.svg",
						title: "perspectives festival",
						text:
							"the legendary first edition of the female:pressure PERSPECTIVES festival pursued the objective of reinforcing the visibility of women in electronic music and the digital arts.",
						link: "https://femalepressure.wordpress.com/festival2013/",
						year: "2013",
					},
					{
						img: "dots.gif",
						title: "call for diversity",
						text:
							"our call for the collective revision of female* representation in electronic music and digital arts. “we need – and paying audiences deserve – invigorating and entertaining diversity!”",
						link: "https://femalepressure.wordpress.com/festival2013/",
						year: "2013",
					},
					{
						img: "dots-180deg.gif",
						title: "FACTS ",
						text:
							"the first FACTS survey which then became a continuous project that quantifies the gender distribution of artists performing at electronic music festivals worldwide.",
						link: "https://femalepressure.wordpress.com/facts-graphic/",
						year: "2013",
					},
					{
						img: "2009-vorspielservice.svg",
						title: "die vorspielservice",
						text:
							"famous djs play and comment selected records from their illimitable archives live for you. and you can buy any record at a killer price! the most exclusive music service on earth!",
						link: "http://www.femalepressure.net/vs.html",
						year: "since 2009",
					},
					{
						img: "2009-japan.svg",
						title: "japan tour",
						text:
							"celebrating the 10th anniversary of our network, we wanted to reflect the global character of female:pressure by organizing a concert tour through Japan.",
						link: "http://www.femalepressure.net/japan.html",
						year: "2009",
					},
					{
						img: "2005-opensounds.svg",
						title: "open:sounds dvd1",
						text: `to counteract the one-sided focus on djs and musicians, we wanted to offer "our" visual artists the overdue possibility to present their work adequately.`,
						link: "http://femalepressure.net/dvd.html",
						year: "2008",
					},
					{
						img: "2005-opensounds.svg",
						title: "open:sounds",
						text: `open:sounds was created as an online production platform for the female:pressure community to exchange sounds and remix each others' tracks.`,
						link: "http://www.femalepressure.net/opensounds.html",
						year: "2005-2009",
					},
				],
			};
		},
	};
</script>

<style lang="sass" scoped></style>
