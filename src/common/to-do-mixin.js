import { state } from "./state";

export default {
  methods: {
    addNewItem(newToDo) {
      this.toDoArray.push({ checked: true, name: newToDo, id: 3 });
    },
    deleteItem(id) {
      this.toDoArray = this.toDoArray.filter((element) => element.id !== id);
    },
  },
  computed: {
    toDoArray: {
      get() {
        return state.toDoArray;
      },
      set(value) {
        state.toDoArray = value;
      },
    },
  },
};
