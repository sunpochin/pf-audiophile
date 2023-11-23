// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/homeauto",
    name: "HomeAuto",
    component: () => import("@/views/HomeAuto.vue"),
  },
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
    path: "/product/:productID/:slug",
    name: "ProductView",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
