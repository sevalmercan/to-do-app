<template>
  <div>
    <new-to-do />
    <div class="tasks-container">
      <task-container :taskArrayProp="array1" taskHeader="To Do" :checkedProp="false" />
      <task-container :taskArrayProp="array2" taskHeader="Done" :checkedProp="true" />
    </div>
  </div>
</template>  

<script>
import toDoMixin from "../common/to-do-mixin";
import newToDo from "../components/new-to-do.vue";
import taskContainer from "../container/task-container.vue";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  mixins: [toDoMixin],
  components: {
    newToDo,
    taskContainer,
  }, mounted() {
    window.onpopstate = () => {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
        })
        .catch(() => {
        });
    }
  }, created() {
    const database = getDatabase(firebaseApp);

    const starCountRef = ref(database, "users/" + "sevalmercan" + "/tasks");

    onValue(starCountRef, (snapshot) => {
      console.log(starCountRef)
      const data = snapshot.val();
      console.log("data", data)
      if (data.length === 0) {
        this.taskArray = []
      }
      else {
        this.taskArray = data;
      }
    });
  }
};
</script>

<style>
.tasks-container {
  margin: 0 15vw;
}
</style>
