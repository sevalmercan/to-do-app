<template>
  <div>
    <div class="header">
      <div>
        {{ taskHeader }}
      </div>
      <div class="button-counter-wrapper">
        <div> {{taskArrayProp.length}} </div>
        <button @click="handleTransition" class="transition-button">
          {{buttonText}}
        </button>
      </div>
    </div>
    <hr />
    <div class="collapse-menu" :class="{active: isActive}" @drop="onDrop($event,checkedProp)" @dragover.prevent
      @dragenter.prevent>
      <div v-for="element in taskArrayProp" :key="element.id">
        <div @dragstart="startDrag($event, element)">
          <to-do-item v-model="element.checked" :val="element.checked" :itemName="element.name" @delete="deleteItem"
            :id="element.id" draggable />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import toDoItem from "@/components/to-do-item.vue";
import toDoMixin from "@/common/to-do-mixin";
import { getDatabase, ref, update } from "firebase/database";
import { firebaseApp } from "@firebaseToDo";
const currentUser = localStorage.getItem("currrentUser");

const database = getDatabase(firebaseApp);
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
    checkedProp: Boolean
  },
  components: {
    toDoItem,
  },
  methods: {
    handleTransition() {
      this.buttonText = this.isActive ? "Close" : "Open"
      this.isActive = !this.isActive
    },
    startDrag(evt, element) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', element.id)
    },
    onDrop(evt, checkedProp) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.taskArray.find((item) => item.id == itemID)
      item.checked = checkedProp
      const updates = {};
      updates["users/" + currentUser + "/tasks/" + item.id] = {
        checked: checkedProp,
        id: item.id,
        name: item.name,
      };
      update(ref(database), updates)
    },
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

  .button-counter-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 103px;
  }
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
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.active {
  max-height: 0;
  transition: max-height 0.4s;
}
</style>
