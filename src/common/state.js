import Vue from "vue";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase";

const database = getDatabase(app);

export const state = Vue.observable({
  taskArray: [],
});

const starCountRef = ref(database, "users/" + "sevalmercan" + "/tasks");

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  state.taskArray = data;
});