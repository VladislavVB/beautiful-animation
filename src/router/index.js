import { createRouter, createWebHistory } from "vue-router";

//pages
const Home = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/home/Home.vue");
// const EventCreate = () =>
//   import(/* webpackChunkName: "view-[request]" */ "@/pages/EventCreate.vue");
const EventList = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventList.vue");
const HomeDetail = () => import("@/pages/homeDetail/HomeDetail.vue");
const MenuPage = () => import("@/pages/menuPage/MenuPage.vue");

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
  // {
  // {
  //   path: "/event/create",
  //   name: "event-create",
  //   component: EventCreate,
  //   meta: {
  //     title: "EventCreate",
  //     layout: "",
  //   },
  // },
  // {
  //   path: "/event/:id",
  //   name: "event-show",
  //   component: EventShow,
  //   props: true,
  //   meta: {
  //     title: "EventShow",
  //     layout: "",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
