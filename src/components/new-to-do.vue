<template>
  <div class="new-to-do">
    <input v-model="newToDoText" class="new-to-do__input" placeholder="Wake Up" />
    <button @click="addNewTask" class="new-to-do__button">ADD A NEW TASK</button>
  </div>
</template>

<script>
import toDoMixin from "@/common/to-do-mixin";
import { set, ref } from "firebase/database";
import { database } from "../../firebase"

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
      this.clearInput();
      set(ref(database, 'users/' + 'sevalmercan' + '/tasks/' + 1), {
        checked: false,
        name: "emre",
        id: 1

      });
    },
    clearInput() {
      this.newToDoText = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.new-to-do {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 15vw;
  background-color: $primary-color;

}

.new-to-do__input {
  width: 43vw;
  height: 30px;
  font-size: 20px;
}

.new-to-do__button {
  margin-left: auto;
  margin-right: 0;
  background-color: white;
  width: 17vw;
  border: 3px solid $primary-color-gray;
}
</style>