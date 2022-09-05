<template>
  <div class="container">
    <header-comp headerName="To Do" />
    <div v-for="element in tempArray" :key="element">
      <to-do-item
        v-model="element.checked"
        :val="element.id"
        :itemName="element.name"
      />
    </div>
  </div>
</template>

<script>
import headerComp from "./components/header.vue";
import toDoItem from "./components/to-do-item.vue";
export default {
  components: {
    headerComp,
    toDoItem,
  },
  data() {
    return {
      tempArray: [
        { checked: false, name: "seval", id: "1" },
        { checked: false, name: "emre", id: "2" },
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 0 15vw;
}
</style>
