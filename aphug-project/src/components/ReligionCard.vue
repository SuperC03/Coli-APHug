<template>
	<div class="card religionCard" v-bind:title="religion.name">
		<div class="card-image">
			<figure class="image is-4by3">
				<img v-bind:src="religion.mainImage" v-bind:alt="religion.name">
			</figure>
		</div>
		<div class="card-content">
			<div class="media-content has-text-centered">
				<p class="title">{{religion.name}}</p>
				<p class="subtitle">{{religion.followerCount}} {{religion.followers}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ReligionCard",
	props: ["religion"]
};
</script>
<style scoped>
.card-content {
	background-color: black;
}
.title,
.subtitle {
	color: white !important;
}
</style>
