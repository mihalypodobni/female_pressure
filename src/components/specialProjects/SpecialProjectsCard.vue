<template>
	<a :href="project.link" class="card-link link">
		<b-card class="p-0 project-card ">
			<b-card-body class="p-0">
				<b-row>
					<b-col class="text-left d-flex align-items-center" cols="12" lg="3">
						<div class="d-flex align-items-center">
							<b-img
								:src="getImgUrl(project.img)"
								:alt="project.title + ' logo'"
								class="project-img"
							/>
						</div>
					</b-col>
					<b-col cols="12" lg="9" class="h-70">
						<h4>{{ project.title }}</h4>

						<div>
							{{ project.text }}

							<div>
								<small>[{{ project.year }}]</small>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-card-body>
		</b-card>
	</a>
</template>

<script>
	export default {
		props: {
			project: Array,
		},
		methods: {
			getImgUrl(img) {
				var images = require.context("../../assets/");
				return images("./" + img);
			},
		},
	};
</script>

<style lang="sass" scoped>
	.project-img
		width: 100px
		margin: 10px
	.project-card
		min-height: 230px
		border: 2px solid $blueBoxBorder
		box-shadow: 0px 0px 15px grey
		color:black
	.card-link
		@include link
	.card-link:hover
		color:black
		box-shadow: 5px 5px 25px black
</style>
