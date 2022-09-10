import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes,
});

export default router;
