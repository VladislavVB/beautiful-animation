import { createRouter, createWebHistory } from "vue-router";

//pages
const Home = () => import("@/pages/home/Home.vue");
const HomeDetail = () => import("@/pages/homeDetail/HomeDetail.vue");
const MenuPage = () => import("@/pages/menuPage/MenuPage.vue");
const AboutPage = () => import("@/pages/aboutCompany/AboutPage.vue");
const ContactPage = () => import("@/pages/contact/ContactPage.vue");
const SubmitPage = () => import("@/pages/submit/SubmitPage.vue");
const CasesPage = () => import("@/pages/casesPage/CasesPage.vue");
const ThanksPage = () => import("@/pages/thanks/ThanksPage.vue");
const NotFound = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/404.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "GROUP 44",
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "xer",
    },
  },
  {
    path: "/home",
    name: "event-list",
    meta: {
      title: "GROUP 44",
      enterClass: "animate__animated animate__fadeInBottomLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutLeft animate__fast",
      // a
    },
  },
  {
    path: "/home-detail/:id",
    name: "HomeDetail",
    component: HomeDetail,
    props: true,
    meta: {
      title: "GROUP 44",
      enterClass: "animate__animated animate__delay-0s",
      leaveClass: "animate__animated animate__delay-0s", // то что нужно по идее
    },
  },
  {
    path: "/menu-page",
    name: "MenuPage",
    component: MenuPage,
    meta: {
      title: "Меню",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta: {
      title: "О нас",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
    meta: {
      title: "Контакты",
      enterClass: "animate__animated animate__fadeInLeft animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/submit",
    name: "SubmitPage",
    component: SubmitPage,
    meta: {
      title: "Заказать звонок",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/cases",
    name: "CasesPage",
    component: CasesPage,
    meta: {
      title: "Кейсы",
      enterClass: "animate__animated animate__fadeInUp animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/thanks",
    name: "thanksPage",
    component: ThanksPage,
    meta: {
      title: "Спасибо",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      title: "404",
      enterClass: "animate__animated animate__fadeInRight animate__fast",
      leaveClass: "animate__animated animate__fadeOutRight animate__fast",
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();

  if (to.meta.title) {
    document.title = to.meta.title;
  }
  /*if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();*/
});

export default router;
