import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Religions from "./views/Religions.vue";
import Credits from "./views/Credits.vue";
import Religion from "./views/Religion.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/religions",
			name: "religions",
			component: Religions
		},
		{
			path: "/credits",
			name: "credits",
			component: Credits
		},
		{
			path: "/religion/:id",
			name: "religion",
			component: Religion
		}
	]
});
