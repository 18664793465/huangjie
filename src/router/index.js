import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login")
  },
  {
    path: "/register",
    component: () => import("@/views/Register")
  },
  {
    path: "/personal",
    component: () => import("@/views/Personal")
  },
  {
    path: "/editprofile",
    component: () => import("@/views/EditProfile")
  },
  {
    path: "/myconcern",
    component: () => import("@/views/Myconcern")
  },
  {
    path: "/mycomments",
    component: () => import("@/views/Mycomments")
  },
  {
    path: "/myfavorite",
    component: () => import("@/views/Myfavorite")
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
