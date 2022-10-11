import { state } from "./state";
import { set, ref, getDatabase, update } from "firebase/database";
import { firebaseApp } from "@firebaseToDo";
import "firebase/compat/firestore";
const database = getDatabase(firebaseApp);
const currentUser = localStorage.getItem("currrentUser");
export default {
  methods: {
    addNewItem(newToDo) {
      console.log("currentuser", currentUser);
      set(
        ref(
          database,
          "users/" + currentUser + "/tasks/" + state.taskArray.length
        ),
        {
          checked: false,
          name: newToDo,
          id: state.taskArray.length,
        }
      );
    },
    deleteItem(id) {
      // When we eant to delete first element in the list we need to update the database not delete.
      if (this.taskArray.length === 1) {
        const updates = {};
        updates["users/" + currentUser + "/tasks/"] = "";
        update(ref(database), updates);
      } else if (this.taskArray.length > 0) {
        set(ref(database, "users/" + currentUser + "/tasks/" + id), null);
      }
    },
    registerUser(id) {
      set(ref(database, "users/" + id + "/tasks/"), "");
    },
  },
  computed: {
    taskArray: {
      get() {
        return state.taskArray;
      },
      set(value) {
        state.taskArray = value;
      },
    },
    array1() {
      return this.taskArray.filter((todo) => !todo.checked);
    },
    array2() {
      return this.taskArray.filter((todo) => todo.checked);
    },
  },
};
