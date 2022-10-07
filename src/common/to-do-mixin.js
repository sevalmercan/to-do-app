import { state } from "./state";
import { set, ref, getDatabase, update } from "firebase/database";
import { firebaseApp } from "../../firebase";
import "firebase/compat/firestore";
const database = getDatabase(firebaseApp);

export default {
  methods: {
    addNewItem(newToDo) {
      set(
        ref(
          database,
          "users/" + "sevalmercan" + "/tasks/" + state.taskArray.length
        ),
        {
          checked: false,
          name: newToDo,
          id: state.taskArray.length,
        }
      );
    },
    deleteItem(id) {
      console.log(this.taskArray.length);
      if (this.taskArray.length === 1) {
        console.log("denemee");
        const updates = {};
        updates["users/" + "sevalmercan" + "/tasks/"] = "";
        update(ref(database), updates);
      } else if (this.taskArray.length > 0) {
        set(ref(database, "users/" + "sevalmercan" + "/tasks/" + id), null);
      }
    },
    registerUser(id) {
      console.log("deneme");
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
