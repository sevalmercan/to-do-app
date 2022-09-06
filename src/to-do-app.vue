<template>
  <div class="container">
    <header-comp headerName="To Do" />
    <div v-for="element in toDoArray" :key="element.id">
      <to-do-item
        v-model="element.checked"
        :val="element.checked"
        :itemName="element.name"
        @delete="deleteItem"
        :id="element.id"
      />
    </div>
  </div>
</template>

<script>
import toDoMixin from "./common/to-do-mixin";
import headerComp from "./components/header.vue";
import toDoItem from "./components/to-do-item.vue";

export default {
  mixins: [toDoMixin],
  components: {
    headerComp,
    toDoItem,
  },
};
</script>

<style>
.container {
  margin: 0 15vw;
}
</style>
