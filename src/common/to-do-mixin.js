import { state } from "./state";
import { set, ref, getDatabase, update } from "firebase/database";
import { firebaseApp } from "../../firebase";
import "firebase/compat/firestore";
const database = getDatabase(firebaseApp);

export default {
  methods: {
    addNewItem(newToDo) {
      console.log("currentuser", this.currrentUser);
      set(
        ref(
          database,
          "users/" + this.currrentUser + "/tasks/" + state.taskArray.length
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
        updates["users/" + this.currrentUser + "/tasks/"] = "";
        update(ref(database), updates);
      } else if (this.taskArray.length > 0) {
        set(ref(database, "users/" + this.currrentUser + "/tasks/" + id), null);
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
    currrentUser: {
      get() {
        return state.authUser;
      },
      set(value) {
        state.authUser = value;
      },
    },
  },
};
