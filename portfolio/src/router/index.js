import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contat",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () =>
      import(/* webpackChunkName: "work" */ "../views/WorkView.vue"),
  },
  {
    path: "/work/:id",
    name: "workDisplay",
    component: () =>
      import(/* webpackChunkName: "work" */ "../views/WorkDisplayView.vue"),
  },
  {
    path: "/CV",
    name: "CV",
    component: () => import(/* webpackChunkName: "CV" */ "../views/CVView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
