<template>
	<nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link :to="{name: 'home'}" class="navbar-item">
				<h1 class="title has-text-info">Colin - APHug</h1>
			</router-link>
			<a
				role="button"
				v-bind:class="{'navbar-burger': true, 'is-active': menuOpen}"
				@click="menuOpen = !menuOpen"
				aria-label="menu"
				v-bind:aria-expanded="menuOpen"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div v-bind:class="{'navbar-menu': true, 'is-active': menuOpen}">
			<div class="navbar-end">
				<div class="navbar-item has-dropdown is-hoverable">
					<router-link :to="{name: 'religions'}" class="navbar-item">Religions</router-link>
					<div class="navbar-dropdown">
						<a
							class="navbar-item"
							v-for="(religion, key) in religions"
							v-bind:key="key"
							@click="newPage(key)"
						>{{religion.name}}</a>
					</div>
				</div>
				<div class="navbar-item" style="visibility: hidden;"></div>
			</div>
		</div>
	</nav>
</template>
<script>
import religions from "../religions.js";

export default {
	name: "Navbar",
	data: function() {
		return {
			religions: religions,
			menuOpen: false
		};
	},
	methods: {
		newPage: function(id) {
			this.$router.push({
				name: "religion",
				params: { id: id }
			});
		}
	}
};
</script>
<style scoped>
.navbar-end .navbar-item {
	background: black;
	color: white;
	font-weight: 300;
	transition: background-color 0.75s;
	-webkit-transition: background-color 0.75s;
}
.navbar-end .navbar-item:hover {
	background-color: hsl(204, 86%, 53%);
	color: white;
}
.navbar-dropdown {
	background-color: black;
	border-color: black;
}
.navbar-menu {
	border-color: black;
}
</style>
