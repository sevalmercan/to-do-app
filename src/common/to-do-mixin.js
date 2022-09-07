import { state } from "./state";

export default {
  methods: {
    addNewItem(newToDo) {
      this.taskArray.push({ checked: false, name: newToDo, id: 3 });
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
