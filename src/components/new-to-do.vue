<template>
  <div class="new-to-do">
    <div class="new-to-do_task">
      <input v-model="newToDoText" class="new-to-do__input" placeholder="  Wake Up" />
      <button @click="addNewTask" class="new-to-do__button">
        ADD A NEW TASK
      </button>
    </div>
    <signOutVue />
  </div>
</template>

<script>
import toDoMixin from "@/common/to-do-mixin";
import signOutVue from "@/views/sign-out.vue";
export default {
  mixins: [toDoMixin],
  data() {
    return {
      newToDoText: "",
    };
  },
  components: {
    signOutVue,
  },
  methods: {
    addNewTask() {
      this.addNewItem(this.newToDoText);
      this.clearInput();
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
  align-items: center;
  padding: 25px 2vw;
  background-color: $primary-color;
}

.new-to-do_task {
  display: flex;
  width: 75%;
  justify-content: space-evenly;
}

.new-to-do__input {
  width: 43vw;
  height: 30px;
  font-size: 20px;
  border-radius: 18px;
}

.new-to-do__button {
  border-radius: 18px;
  background-color: white;
  width: 17vw;
  border: 3px solid $primary-color-gray;
}
</style>
