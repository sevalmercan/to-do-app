<template>
  <div>
    <div class="header">
      <div>
        {{ taskHeader }}
      </div>
      <button @click="handleTransition" class="transition-button">
        {{buttonText}}
      </button>
    </div>
    <hr />
    <div class="collapse-menu" :class="{active: isActive}">
      <div v-for="element in taskArrayProp" :key="element.id">
        <to-do-item v-model="element.checked" :val="element.checked" :itemName="element.name" @delete="deleteItem"
          :id="element.id" />
      </div>
    </div>

  </div>
</template>

<script>
import toDoItem from "@/components/to-do-item.vue";
import toDoMixin from "@/common/to-do-mixin";
export default {
  mixins: [toDoMixin],
  data() {
    return {
      isActive: false,
      buttonText: "Close"
    }
  },
  props: {
    taskArrayProp: [],
    taskHeader: String,
  },
  components: {
    toDoItem,
  },
  methods: {
    handleTransition() {
      this.buttonText = this.isActive ? "Close" : "Open"
      this.isActive = !this.isActive
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/style.scss";

.header {
  color: $primary-color-gray;
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hr {
  border: none;
  border-top: 1px solid$primary-color-gray;
  height: 2px;
}

.transition-button {
  border-radius: 18px;
  height: 31px;
  width: 67px;
  background-color: $primary-color;
  border: 3px solid $primary-color-gray;
  color: white;
  cursor: pointer;
}

.transition-button:hover {
  transform: scale(1.1);
}

.collapse-menu {
  max-height: 1000px;
  transition: max-height 2s;
  overflow: hidden;
}

.active {
  max-height: 0;
  transition: max-height 0.4s;
}
</style>
