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
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/home",
    name: "event-list",
    component: EventList,
    meta: {
      title: "EventList",
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/home-detail",
    name: "HomeDetail",
    component: HomeDetail,
    meta: {
      title: "Home detail",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/menu-page",
    name: "MenuPage",
    component: MenuPage,
    meta: {
      title: "Menu",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta: {
      title: "AboutPage",
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
    meta: {
      title: "Contact",
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/submit",
    name: "SubmitPage",
    component: SubmitPage,
    meta: {
      title: "Submit",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/cases",
    name: "CasesPage",
    component: CasesPage,
    meta: {
      title: "Casespage",
      enterClass: "animate__animated animate__fadeInUp animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
