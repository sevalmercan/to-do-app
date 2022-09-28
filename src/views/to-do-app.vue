<template>
  <div>
    <new-to-do />
    <div class="tasks-container">
      <task-container :taskArrayProp="array1" taskHeader="To Do" />
      <task-container :taskArrayProp="array2" taskHeader="Done" />
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
};
</script>

<style>
.tasks-container {
  margin: 0 15vw;
}
</style>
