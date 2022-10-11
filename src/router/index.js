import Vue from "vue";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "@firebaseToDo";
import VueRouter from "vue-router";
import ToDoApp from "../views/to-do-app.vue";
import SignIn from "../views/sign-in.vue";
import RegisterUser from "../views/register-user.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: RegisterUser,
  },
  {
    path: "/home",
    name: "Home",
    component: ToDoApp,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const auth = getAuth(firebaseApp);

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else next();
});
export default router;
