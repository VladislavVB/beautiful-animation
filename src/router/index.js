import { createRouter, createWebHistory } from "vue-router";

//pages
const Home = () => import("@/pages/home/Home.vue");
const EventList = () => import("@/pages/EventList.vue");
const HomeDetail = () => import("@/pages/homeDetail/HomeDetail.vue");
const MenuPage = () => import("@/pages/menuPage/MenuPage.vue");
const AboutPage = () => import("@/pages/aboutCompany/AboutPage.vue");
const ContactPage = () => import("@/pages/contact/ContactPage.vue");
const SubmitPage = () => import("@/pages/submit/SubmitPage.vue");
const CasesPage = () => import("@/pages/casesPage/CasesPage.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home page",

      // enterClass: "animate__animated animate__fadeInLeft",
      // leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/home",
    name: "event-list",
    component: EventList,
    meta: {
      title: "EventList",

      // enterClass: "animate__animated animate__fadeInLeft",
      // leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/home-detail",
    name: "HomeDetail",
    component: HomeDetail,
    meta: {
      title: "Home detail",

      // enterClass: "animate__animated animate__fadeInLeft",
      // leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/menu-page",
    name: "MenuPage",
    component: MenuPage,
    meta: {
      title: "Menu",
    },
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta: {
      title: "AboutPage",

    },
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
    meta: {
      title: "Contact",

    },
  },
  {
    path: "/submit",
    name: "SubmitPage",
    component: SubmitPage,
    meta: {
      title: "Submit",

    },
  },
  {
    path: "/cases",
    name: "CasesPage",
    component: CasesPage,
    meta: {
      title: "Cases page",

    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
