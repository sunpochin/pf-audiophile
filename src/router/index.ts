// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/headphones",
    name: "headphones",
    component: () => import("@/views/HeadphonesView.vue"),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("@/views/SpeakersView.vue"),
  },
  {
    path: "/earphones",
    name: "earphones",
    component: () => import("@/views/EarphonesView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/product/:category/:id",
    name: "product",
    component: () => import("@/views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
