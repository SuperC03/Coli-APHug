<template>
	<nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link :to="{name: 'home'}" class="navbar-item">
				<h1 class="is-size-3 has-text-info">Coli - APHug</h1>
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
				<div class="navbar-item">
					<router-link :to="{name: 'religions'}" class="navbar-item">Religions</router-link>
				</div>
				<div class="navbar-item" style="visibility: hidden;"></div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: "Navbar",
	data: function() {
		return {
			menuOpen: false
		};
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
.navbar-menu {
	border-color: black;
}
</style>
