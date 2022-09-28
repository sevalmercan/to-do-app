import { state } from "./state";
import { set, ref, getDatabase } from "firebase/database";
import { appx } from "../../firebase";
import "firebase/compat/firestore";
const database = getDatabase(appx);

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
      set(ref(database, "users/" + "sevalmercan" + "/tasks/" + id), null);
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
