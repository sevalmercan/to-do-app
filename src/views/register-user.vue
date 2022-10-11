<template>
  <div class="home">
    <auth-form @submit="onSubmit" authType="Register" />
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>
  
<script>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { firebaseApp } from "@firebaseToDo";
import authForm from "@/components/auth-form.vue";
import toDoMixin from "@/common/to-do-mixin";
export default {
  mixins: [toDoMixin],
  components: { authForm },
  methods: {
    onSubmit(value) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          this.registerUser(userCredential.user.reloadUserInfo.localId)
          this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message);
        });

    },
  },
};
</script>