<template>
	<div class="Home">
		<div class="hero header is-fullheight-with-navbar">
			<div class="hero-body">
				<div class="container has-text-centered header-container">
					<h1 class="title has-text-white">{{title}}</h1>
					<h3 class="subtitle project-author has-text-info">by Colin</h3>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Home",
	data: function() {
		return {
			title: "Coli - APHug"
		};
	}
};
</script>
<style scoped>
.Home {
	font-family: "Comfortaa", cursive;
}
.project-author {
	font-weight: 300;
}
.header-container {
	background-color: black;
	border: none;
	border-radius: 25px;
	padding-top: 5%;
	padding-bottom: 5%;
}
</style>
