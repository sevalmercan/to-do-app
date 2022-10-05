import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { state } from "./common/state";
Vue.config.productionTip = false;
let app = "";

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, () => {
  if (auth.currentUser !== null) {
    const database = getDatabase(firebaseApp);

    console.log(
      "auth nulla eşit değil",
      auth.currentUser.reloadUserInfo.localId
    );
    const starCountRef = ref(
      database,
      "users/" + auth.currentUser.reloadUserInfo.localId + "/tasks"
    );

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      state.taskArray = data;
    });
  }
  if (!app) {
    console.log("deneme", auth);
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
