<template>
	<div class="Religion">
		<div class="hero header is-fullheight-with-navbar" v-bind:style="backgroundImage">
			<div class="hero-body">
				<div class="container has-text-centered">
					<img v-bind:src="religion.mainImage" v-bind:alt="religion.name">
					<br>
					<h1 class="title is-size-1">{{religion.name}}</h1>
					<br>
					<table class="table is-bordered is-hoverable">
						<tr>
							<td>Follower Name</td>
							<td>{{religion.followers}}</td>
						</tr>
						<tr>
							<td>Followers:</td>
							<td>{{religion.followerCount}}</td>
						</tr>
						<tr>
							<td>God{{religion.gods.length > 1 ? "s" : ""}}:</td>
							<td>{{religion.gods.join(", ")}}</td>
						</tr>
						<tr>
							<td>Deity Belief Type:</td>
							<td>{{religion.deityBelief}}</td>
						</tr>
						<tr>
							<td>Spread Type:</td>
							<td>{{religion.spreadType}}</td>
						</tr>
						<tr>
							<td>Birthplace:</td>
							<td>{{religion.birthplace}}</td>
						</tr>
						<tr>
							<td>Founder:</td>
							<td>{{religion.founder}}</td>
						</tr>
						<tr>
							<td>Major Branches:</td>
							<td>{{religion.subdivisions.join(", ")}}</td>
						</tr>
					</table>
					<div class="container description">
						<p>{{religion.description}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import religions from "../religions.js";

export default {
	name: "Religion",
	data: function() {
		return {
			religion: {},
			religionKeys: {
				Christianity: religions[0][0],
				Islam: religions[0][1],
				Buddhism: religions[0][2],
				Hinduism: religions[1][0],
				Judaism: religions[1][1]
			}
		};
	},
	mounted: function() {
		this.religion = this.religionKeys[this.$route.params.name];
	}
};
</script>
<style scoped>
.container {
	background-color: white;
	border-radius: 25px;
}
.container image {
	border-radius: 25px 25px 0px 0px;
	width: 100%;
}
.container table {
	width: 50%;
	margin-left: 25%;
	margin-right: 25%;
}
.container table tr td:first-child {
	font-weight: bold;
}
.container table tr td {
	text-align: center;
}
.description {
	padding: 5%;
}
</style>
