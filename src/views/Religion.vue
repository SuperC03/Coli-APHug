<template>
	<div class="Religon">{{religion}}</div>
</template>

<script>
import religions from "../religions.js";

export default {
	name: "Religion",
	data: function() {
		return {
			religion: religions[this.$route.params.id]
		};
	}
};
</script>
