<template>
  <div>
    <div class="header-name">{{ taskHeader }}</div>
    <hr />
    <div v-for="element in taskArrayProp" :key="element.id">
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
import toDoItem from "@/components/to-do-item.vue";
import toDoMixin from "@/common/to-do-mixin";
export default {
  mixins: [toDoMixin],
  props: {
    taskArrayProp: [],
    taskHeader: String,
  },
  components: {
    toDoItem,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/style.scss";

.header-name {
  color: $primary-color-gray;
  font-size: 35px;
  display: flex;
}
.hr {
  border: none;
  border-top: 1px solid$primary-color-gray;
  height: 2px;
}
</style>
