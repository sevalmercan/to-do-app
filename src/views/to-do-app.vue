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
import toDoMixin from "@/common/to-do-mixin";
import newToDo from "@/components/new-to-do.vue";
import taskContainer from "@/container/task-container.vue";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "@firebaseToDo";
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
    const currentUser = localStorage.getItem('currrentUser');
    const starCountRef = ref(database, "users/" + currentUser + "/tasks");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data === null || data?.length === 0) {
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
