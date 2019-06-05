<template>
	<footer class="footer" @click="citations">
		<div class="content has-text-centered footer-content">
			Coli - APHug was created with
			<span class="heart">❤</span> by Colin Clark.
			<br>Click Here for the Image Citations
		</div>
	</footer>
</template>
<script>
export default {
	name: "Footer",
	methods: {
		citations: function() {
			this.$router.push({ name: "credits" });
		}
	}
};
</script>
<style scoped>
.footer {
	background: black;
	cursor: pointer;
}
.footer {
	-webkit-transition: color 0.75s;
	transition: color 0.75s;
}
.footer:hover {
	color: hsl(204, 86%, 53%);
}
</style>
