<template>
  <div>
    <input v-model="newToDoText" />
    <button @click="addNewTask">ADD A NEW TASK</button>
  </div>
</template>

<script>
import toDoMixin from "@/common/to-do-mixin";

export default {
  mixins: [toDoMixin],
  data() {
    return {
      newToDoText: "",
    };
  },
  methods: {
    addNewTask() {
      this.addNewItem(this.newToDoText);
    },
  },
};
</script>
