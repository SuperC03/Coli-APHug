<template>
	<div class="Religions">
		<div class="columns" v-for="(religionGroup, i) in religions" v-bind:key="i">
			<div class="column" v-for="religion in religionGroup" v-bind:key="religion.name">
				<router-link :to="{name: 'religion', params: {name: religion.name}}">
					<religion-card v-bind:religion="religion"></religion-card>
				</router-link>
			</div>
			<div class="column" v-for="n in 3 - religionGroup.length" v-bind:key="n"></div>
		</div>
	</div>
</template>
<script>
import religions from "../religions.js";
import groupInputs from "../services/groupInputs.js";
import ReligionCard from "../components/ReligionCard.vue";

console.log(religions[0]);

export default {
	name: "Religions",
	data: function() {
		return {
			religions: groupInputs(religions, 3)
		};
	},
	components: {
		"religion-card": ReligionCard
	}
};
</script>
<style scoped>
.Religions {
	margin: 0px;
	padding: 0px;
	width: 100vw;
}
.columns {
	margin: 0px;
	padding: 5%;
	background-image: url("https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/5813e156414fb51499dfe55c/5860e4d99de4bb91b6add275/1537833555900/?format=1000w");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
