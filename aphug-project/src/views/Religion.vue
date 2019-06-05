<template>
	<div class="Religion">
		<div class="hero header is-fullheight-with-navbar" v-bind:style="backgroundImage">
			<div class="hero-body">
				<div class="container has-text-centered">
					<img v-bind:src="religion.mainImage" v-bind:alt="religion.name">
					<br>
					<h1 class="title is-size-1">{{religion.name}}</h1>
					<p>{{religion.description}}</p>
					<table class="table is-bordered is-hoverable">
						<tr>
							<td>Followers:</td>
							<td>{{religion.followerCount}}</td>
						</tr>
						<tr>
							<td>God{{religion.gods.length > 1 ? "s" : ""}}:</td>
							<td>{{religion.gods.join(", ")}}</td>
						</tr>
					</table>
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
			backgroundImage: ""
		};
	},
	mounted: function() {
		this.religion = religions.find(e => {
			return e.name == this.$route.params.name;
		});
		this.backgroundImage = {
			"background-image": this.religion.mainImage
		};
		console.log(this.backgroundImage);
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
</style>
