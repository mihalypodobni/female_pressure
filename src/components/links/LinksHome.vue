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
					// ANTI RACISM
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
					// FEMALE PRESSURE RADIO
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
					// BLOGS IN ENGLISH
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
					//  BLOGS IN OTHER LANGUAGES
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
					// MUSIC PRODUCTION
					{
						categoryTitle: "music production, gear and tech stuff",
						links: [
							{
								title: "čipke",
								url: "https://cipkeen.wordpress.com/",
								language: "EN",
							},
							{
								title: "cynthia- girls on synth",
								url: "https://cipkeen.wordpress.com/",
								language: "EN",
							},
							{
								title: "dbs music",
								url: "https://catalyst-berlin.com/music",
								language: "EN",
							},
							{
								title: "female audio youtubers you need to follow",
								url:
									"https://lnamusic.com/2020/04/15/female-audio-youtubers-you-need-to-follow/",
								language: "EN",
							},
							{
								title: "fem synth lab",
								url:
									"https://womenscenterforcreativework.com/events/fem-synth-lab/",
								language: "EN",
							},
							{
								title: "femme house",
								url: "https://www.thisisfemmehouse.com/",
								language: "EN",
							},
							{
								title: "flower electronics",
								url: "https://flowerelectronics.com/",
								language: "EN",
							},
							{
								title: "gender amplified",
								url: "https://genderamplified.org/",
								language: "EN",
							},
							{
								title: "girls make beats",
								url: "https://www.girlsmakebeats.org/",
								language: "EN",
							},
							{
								title: "kitmonsters",
								url: "http://kitmonsters.com/",
								language: "EN",
							},
							{
								title: "mess, melbourne electronic sound studio",
								url: "http://kitmonsters.com/",
								language: "EN",
							},
							{
								title: "miss baltazar#s laboratory",
								url: "http://www.mzbaltazarslaboratory.org/",
								language: "EN",
							},
							{
								title: "modular moon",
								url: "https://www.modularmoon.com/",
								language: "EN",
							},
							{
								title: "music production for women",
								url: "https://musicproductionforwomen.com/front-page",
								language: "EN",
							},
							{
								title: "parallel",
								url: "https://www.prllmusic.com/",
								language: "RU",
							},
							{
								title: "queer ear mastering",
								url: "http://queerearmastering.com/",
								language: "EN",
							},
							{
								title: "sonic bloom",
								url: "https://sonicbloom.net/en/",
								language: "EN/DE",
							},
							{
								title: "sound girls",
								url: "https://soundgirls.org/",
								language: "EN",
							},
							{
								title: "synthesizer studio hamburg",
								url: "http://www.synthesizerstudio.com/",
								language: "",
							},
							{
								title: "synthfarm",
								url: "https://synthfarm.in/",
								language: "EN",
							},
							{
								title: "synthtopia",
								url:
									"https://www.synthtopia.com/content/tag/women-in-electronic-music/",
								language: "EN",
							},

							{
								title: "techne",
								url: "https://technesound.org/",
								language: "EN",
							},
							{
								title: "women's audio mission",
								url: "https://womensaudiomission.org/",
								language: "EN",
							},
							{
								title: "women in sound",
								url: "https://www.womeninsound.org/",
								language: "EN",
							},
							{
								title: "yorkshire sound women network",
								url: "https://yorkshiresoundwomen.com",
								language: "EN",
							},
						],
					},
					// NETWORKS COLLECTIVES AND INDICES
					{
						categoryTitle: "networks, collectives and indices",
						links: [
							{
								title: "#vivas",
								url: "https://seescuchanvivas.tumblr.com/",
								language: "ES",
							},
							{
								title:
									"50+ all-women and feminist sound/music tech collectives, co-ops, non-profits",
								url:
									"https://drlizdobson.wpcomstaging.com/2018/02/18/feministsoundcollectives/",
								language: "EN",
							},
							{
								title:
									"black femme identifying electronic djs/producers/artists",
								url:
									"https://docs.google.com/spreadsheets/d/1z2u8I5XXYZopIDdBj1maSeMXvbcLtkNcmpUyADFhdVk/edit#gid=0",
								language: "EN",
							},
							{
								title: "composer diversity",
								url: "https://www.composerdiversity.com/",
								language: "EN",
							},
							{
								title: "coven code",
								url: "https://www.instagram.com/coven.code/",
								language: "EN",
							},
							{
								title: "digital media women",
								url: "https://digitalmediawomen.de/",
								language: "DE",
							},
							{ title: "discwoman", url: "discwoman.com", language: "EN" },
							{
								title: "dnb girls",
								url: "https://dnbgirls.net/",
								language: "EN",
							},
							{
								title: "drömfakulteten",
								url: "https://dromfakulteten.tumblr.com/",
								language: "EN",
							},
							{
								title: "éclat crew",
								url: "https://www.eclatcrew.com",
								language: "EN",
							},
							{ title: "eq50", url: "https://www.eq50.co.uk/", language: "EN" },
							{
								title: "eql directory",
								url: "https://makeiteql.com/",
								language: "EN",
							},
							{
								title: "fairplay",
								url: "https://fairplay.hotglue.me/",
								language: "FR",
							},
							{
								title: "feat.fem",
								url: "https://www.facebook.com/Feat.Fem/",
								language: "DE",
							},
							{
								title: "female beatmakers",
								url: "https://www.facebook.com/FemaleBeatmakers",
								language: "EN",
							},
							{
								title: "female frequency",
								url: "https://www.femalefrequency.com/",
								language: "EN",
							},
							{ title: "femdex", url: "http://femdex.net/", language: "EN" },
							{
								title: "fierce collective",
								url: "https://www.facebook.com/fiercecollective",
								language: "EN",
							},
							{
								title: "female laptop orchestra",
								url: "https://femalelaptoporchestra.wordpress.com/",
								language: "EN",
							},
							{
								title: "free the bird",
								url: "https://www.freethebid.com",
								language: "EN",
							},
							{
								title: "fields & frequencies ",
								url: "https://fieldsandfrequencies.wordpress.com/",
								language: "EN",
							},
							{
								title: "grrrls night out",
								url: "https://grrrls.at/en/",
								language: "EN",
							},
							{
								title: "international alliance for women in music",
								url: "https://grrrls.at/en/",
								language: "EN",
							},
							{
								title: "international women's film festival network",
								url: "https://www.frauenfilmfestival.eu/index.php?id=1228",
								language: "DE",
							},
							{
								title: "many many women",
								url: "https://manymanywomen.com/about/",
								language: "EN",
							},
							{ title: "mint", url: "http://mintberlin.de/", language: "DE" },
							{
								title: "mujeres de la industria de la musica",
								url: "https://asociacionmim.com/",
								language: "ES",
							},
							{
								title: "mulheril",
								url: "https://www.facebook.com/festamulheril",
								language: "PT",
							},
							{
								title: "museruole - women in experimental music",
								url: "https://soundcloud.com/museruole",
								language: "EN",
							},
							{
								title: "nautilus collective",
								url: "https://twitter.com/nc_composers?lang=en",
								language: "EN",
							},
							{
								title: "no shade",
								url: "https://www.noshade.eu/",
								language: "EN",
							},
							{
								title: "nótt",
								url: "contactonott.wixsite.com/nott",
								language: "ES",
							},
							{ title: "oramics", url: "https://oramics.pl/", language: "PL" },
							{
								title: "period",
								url: "https://periodbrussels.eu/",
								language: "EN",
							},
							{
								title: "poc in audio",
								url: "https://pocinaudio.com/",
								language: "EN",
							},
							{
								title: "ronda de mujeres",
								url: "https://www.facebook.com/rondademujeresuruguay/",
								language: "ES",
							},
							{
								title: "shejay",
								url: "https://www.facebook.com/shejay.net/",
								language: "EN",
							},
							{
								title: "shesaid.so",
								url: "https://www.shesaid.so/",
								language: "EN",
							},
							{
								title: "siren",
								url: "https://www.facebook.com/sirenldn/",
								language: "EN",
							},
							{
								title: "sirens on stage",
								url: "https://www.sirensonstage.com/",
								language: "EN",
							},
							{
								title: "sisu",
								url: "https://www.sisucrew.co.uk/",
								language: "EN",
							},
							{
								title: "society of stem women of colour",
								url: "https://www.sswoc.org/",
								language: "EN",
							},
							{ title: "sonora", url: "http://www.sonora.me/", language: "PT" },
							{
								title: "sound systers",
								url: "soundsysters.com",
								language: "EN",
							},
							{
								title: "sound warriors",
								url: "https://soundcloud.com/soundwarriors",
								language: "EN",
							},
							{
								title: "techno mate",
								url: "https://linktr.ee/technomate",
								language: "EN",
							},
							{
								title: "the mahoyo project",
								url: "http://mahoyo.com/documentary/",
								language: "EN",
							},
							{
								title: "tits united",
								url: "https://www.facebook.com/titsunited/",
								language: "TR",
							},
							{
								title: "tjejrejv",
								url: "https://www.facebook.com/tjejrejv",
								language: "SW",
							},
							{
								title: "toffee teeth",
								url: "https://soundcloud.com/toffeeteeth",
								language: "EN",
							},
							{
								title: "upfront",
								url: "https://www.thisisupfront.com/",
								language: "EN",
							},
							{
								title: "we b girlz",
								url: "http://www.b-girlz-berlin.de/res/m/",
								language: "EN",
							},
							{
								title: "we have voice",
								url: "http://wehavevoice.org/",
								language: "EN",
							},
							{
								title: "we:shape",
								url: "https://www.weshape.network/",
								language: "EN",
							},
							{
								title: "women in eletronic music",
								url: "https://www.facebook.com/wemusic",
								language: "EN",
							},
							{
								title: "women in music",
								url: "https://www.womeninmusic.org/",
								language: "EN",
							},
							{
								title: "women in music index",
								url:
									"https://www.musiccitiesnetwork.com/projects-details/women-in-music",
								language: "EN",
							},
							{
								title: "women in music technology",
								url: "https://gtcmt.gatech.edu/women-music-technology",
								language: "EN",
							},
							{
								title: "women in technology",
								url: "https://www.womenintechnology.org/",
								language: "EN",
							},
							{
								title: "women multimedia network",
								url: "https://www.facebook.com/wmnetworkparis/",
								language: "EN/FR",
							},
							{
								title: "wonomute",
								url: "https://wonomute.no/directory-of-wonomute/",
								language: "EN",
							},
							{
								title: "wut",
								url: "https://www.facebook.com/wutmuc/",
								language: "DE",
							},
						],
					},
					// INTERNET RADIO AND LIVESTREAMS
					{
						categoryTitle: "internet radio and livestreams ",
						links: [
							{
								title: "audio asyl",
								url: "https://audioasyl.net/",
								language: "EN",
							},
							{ title: "play.fm", url: "https://www.play.fm/", language: "EN" },
							{
								title: "radio b-east",
								url: "https://cba.fro.at/382813",
								language: "DE",
							},
							{
								title: "radioOrakel",
								url: "https://radiorakel.no/",
								language: "NO",
							},
							{ title: "reboot.fm", url: "http://reboot.fm/", language: "EN" },
							{
								title: "refuge worldwide",
								url: "https://refugeworldwide.com/",
								language: "EN",
							},
							{ title: "rts.fm", url: "https://rts.fm/", language: "EN" },
							{
								title: "wonderful",
								url: "https://www.wonderfuldjs.com/",
								language: "EN",
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

	.link-container:hover
		background-color: $blueBoxBorder
		padding-left: 15px

	.link
		color: black

	.link:hover
		color: black
		text-decoration: none
</style>
