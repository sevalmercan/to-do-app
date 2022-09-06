export default {
  data() {
    return {
      toDoArray: [
        { checked: false, name: "seval", id: 1 },
        { checked: true, name: "emre", id: 2 },
      ],
    };
  },
  methods: {
    addNewItem(newToDo) {
      this.toDoArray.push(newToDo);
    },
    deleteItem(id) {
      this.toDoArray = this.toDoArray.filter((element) => element.id !== id);
    },
  },
};
