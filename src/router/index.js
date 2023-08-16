import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/JobsView.vue";
import JobsDetails from "../views/jobs/JobsDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },

  {
    path: "/jobs/:id",
    name: "details",
    component: JobsDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
