import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { appx } from "../firebase";
Vue.config.productionTip = false;
let app = "";

const auth = getAuth(appx);

onAuthStateChanged(auth, () => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
