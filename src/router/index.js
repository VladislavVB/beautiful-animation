import { createRouter, createWebHistory } from "vue-router";

//pages
const Home = () => import("@/pages/home/Home.vue");
const EventList = () => import("@/pages/EventList.vue");
const HomeDetail = () => import("@/pages/homeDetail/HomeDetail.vue");
const MenuPage = () => import("@/pages/menuPage/MenuPage.vue");
const AboutPage = () => import("@/pages/aboutCompany/AboutPage.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home page",
      layout: "",
    },
  },
  {
    path: "/home",
    name: "event-list",
    component: EventList,
    meta: {
      title: "EventList",
      layout: "",
    },
  },
  {
    path: "/home-detail",
    name: "HomeDetail",
    component: HomeDetail,
    meta: {
      title: "Home detail",
      layout: "",
    },
  },
  {
    path: "/menu-page",
    name: "MenuPage",
    component: MenuPage,
    meta: {
      title: "Menu",
      layout: "",
    },
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta: {
      title: "AboutPage",
      layout: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
