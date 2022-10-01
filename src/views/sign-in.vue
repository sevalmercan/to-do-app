<template>
  <div class="home">
    <auth-form @submit="onSubmit" authType="Login" />
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { firebaseApp } from "../../firebase";
import authForm from "@/components/auth-form.vue";
export default {
  components: { authForm },
  methods: {
    onSubmit(value) {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, value.email, value.password)
        .then(() => {
          this.$router.push({ path: '/home' })
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
