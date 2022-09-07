<template>
  <div>
    <header-comp :headerName="taskHeader" />
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
import headerComp from "@/components/header.vue";
import toDoItem from "@/components/to-do-item.vue";
import toDoMixin from "@/common/to-do-mixin";
export default {
  mixins: [toDoMixin],
  props:{
    taskArrayProp :[],
    taskHeader: String
  },
  components: {
    headerComp,
    toDoItem,
  },
  
  
};
</script>
