<template>
  <div>
    <new-to-do />
    <div class="tasks-container">
      <task-container :taskArrayProp="array1" taskHeader="To Do" v-if="lengthArr" />
      <task-container :taskArrayProp="array2" taskHeader="Done" v-if="lengthArr" />
    </div>
  </div>
</template>

<script>
import toDoMixin from "../common/to-do-mixin";
import newToDo from "../components/new-to-do.vue";
import taskContainer from "../container/task-container.vue";
export default {
  mixins: [toDoMixin],
  components: {
    newToDo,
    taskContainer,
  },
  computed: {
    lengthArr() {
      return this.array1
    }
  }
};
</script>

<style>
.tasks-container {
  margin: 0 15vw;
}
</style>
