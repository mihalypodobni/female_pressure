import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/components/home/Home"),
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("@/components/search/SearchHome"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () =>
        import("@/components/specialProjects/SpecialProjectsHome"),
    },
    {
      path: "/links/:category?",
      name: "Links",
      component: () => import("@/components/links/LinksHome"),
      alias: "/links/:category",
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/components/about/AboutHome"),
    },
    {
      path: "/events",
      name: "Events",
      component: () => import("@/components/events/EventsHome"),
    },
    {
      path: "/merch",
      name: "Merch",
      component: () => import("@/components/merch/MerchHome"),
    },
    {
      path: "/code_of_conduct",
      name: "CoC",
      component: () => import("@/components/codeOfConduct/CodeOfConductHome"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/components/blog/BlogHome"),
    },
    {
      path: "/safer_space",
      name: "Safer Space",
      component: () => import("@/components/saferSpace/SaferSpaceHome"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("@/components/faq/FAQHome"),
    },
    {
      path: "/feedback",
      name: "Feedback",
      component: () => import("@/components/faq/FAQHome"),
    },
    {
      path: "/join-network",
      name: "Join Network",
      component: () => import("@/components/join/JoinHome"),
    },
  ],
});

export default router;
