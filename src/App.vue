<template>
	<div class="App">
		<app-navbar></app-navbar>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		"app-navbar": Navbar,
		"app-footer": Footer
	}
};
</script>
<style>
.App {
	font-family: "Comfortaa", cursive;
}
.header {
	background-image: url("https://static1.squarespace.com/static/5813cddb8419c25c3b42eacd/5813e156414fb51499dfe55c/5860e4d99de4bb91b6add275/1537833555900/?format=1000w");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
/* width */
::-webkit-scrollbar {
	width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background-image: linear-gradient(black, hsl(204, 86%, 53%), black);
}
</style>
