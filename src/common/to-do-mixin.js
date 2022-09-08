import { state } from "./state";
import { set, ref } from "firebase/database";
import { database } from "../../firebase"
export default {
  methods: {
    addNewItem(newToDo) {
      //this.taskArray.push({ checked: false, name: newToDo, id: 3 });
      /* set(ref(database, 'users/' + 'sevalmercan' + '/tasks/' + 3), {
        checked: false,
        name: "delii",
        id: 3

      }); */
    },
    deleteItem(id) {
      this.taskArray = this.taskArray.filter((element) => element.id !== id);
    },
  },
  computed: {
    taskArray: {
      get() {
        return state.taskArray
      },
      set(value) {
        state.taskArray = value;
      },
    },
    array1 (){
      return this.taskArray.filter(todo => !todo.checked)
    },
    array2 (){
      return this.taskArray.filter(todo => todo.checked)
    }
    
  },
};
