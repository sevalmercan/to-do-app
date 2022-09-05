<template>
  <div class="container">
    <header-comp headerName="To Do" />
    <div v-for="element in tempArray" :key="element.id">
      <to-do-item
        v-model="element.checked"
        :val="element.checked"
        :itemName="element.name"
        @delete="deleteItem"
        :id="element.id"
      />
      {{ element.checked }}
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
        { checked: true, name: "emre", id: "2" },
      ],
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.tempArray = this.tempArray.filter((element) => element.id !== id);
    },
  },
};
</script>

<style>
.container {
  margin: 0 15vw;
}
</style>
