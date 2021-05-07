<template>
	<a :href="project.link" class="card-link link">
		<b-card class="p-0 project-card">
			<b-card-body class="p-0">
				<b-row>
					<b-col class="text-left" cols="3">
						<b-img
							:src="getImgUrl(project.img)"
							:alt="project.title + ' logo'"
							class="project-img"
						/>
					</b-col>
					<b-col cols="9">
						<h4>{{ project.title }}</h4>

						<div>
							{{ project.text }}
						</div>
						<div>
							<small>[{{ project.year }}]</small>
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
			getImgUrl(pet) {
				var images = require.context("../../assets/", false, /\.svg$/);
				return images("./" + pet + ".svg");
			},
		},
	};
</script>

<style lang="sass" scoped>
	.project-img
		width: 100px
	.project-card
		height: 230px
		border: 2px solid $blueBoxBorder
		box-shadow: 0px 0px 15px grey
		color:black
	.card-link
		@include link
	.card-link:hover
	color:black
</style>
