import Vue from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";
import VueRouter from "vue-router";
import ToDoApp from "../views/to-do-app.vue";
import HomePage from "../views/home-page.vue"
import SignIn from "../views/sign-in.vue"
import RegisterUser from "../views/register-user.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: '/',
        component: SignIn,
      },
      {
        path: 'register',
        component: RegisterUser,
      }
    ]

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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    let currrentUser =   onAuthStateChanged(auth, (user) => {
      return user;
    
    }); 
    if (currrentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});
export default router;
