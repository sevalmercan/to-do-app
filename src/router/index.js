import Vue from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";
import VueRouter from "vue-router";
import LoginView from "../views/login-view.vue";
import ToDoApp from "../views/to-do-app.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/register-view.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ToDoApp,
    meta: {
      authRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.authRequired)) {
      if (user) {
        next();
      } else if (!user) {
        alert("You must be logged in to see this page");
        next({
          path: "/",
        });
      }
    } else {
      next();
    }
  });
});

export default router;
