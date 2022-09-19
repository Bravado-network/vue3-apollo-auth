import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/protected",
      component: () => import("@/pages/Protected.vue"),
    },
  ],
});

export default router;
