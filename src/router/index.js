import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    component: () => import("@/views/Index")
  },
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
    component: () => import("@/views/Personal"),
    meta: {
      authorization: true
    }
  },
  {
    path: "/editprofile",
    component: () => import("@/views/EditProfile")
  },
  {
    path: "/myconcern",
    component: () => import("@/views/Myconcern"),
    meta: {
      authorization: true
    }
  },
  {
    path: "/mycomments",
    component: () => import("@/views/Mycomments"),
    meta: {
      authorization: true
    }
  },
  {
    path: "/myfavorite",
    component: () => import("@/views/Myfavorite"),
    meta: {
      authorization: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
