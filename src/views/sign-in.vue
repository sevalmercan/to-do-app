<template>
  <div class="home">
    <auth-form @submit="onSubmit" authType="Login" />
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { firebaseApp } from "@firebaseToDo";
import authForm from "@/components/auth-form.vue";
import toDoMixin from "@/common/to-do-mixin";
export default {
  mixins: [toDoMixin],
  components: { authForm },
  methods: {
    onSubmit(value) {

      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          localStorage.setItem('currentUser', userCredential.user.reloadUserInfo.localId)
          console.log("signin", userCredential.user.reloadUserInfo.localId)
          this.$router.push({ path: '/home' })
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
