<template>
  <div class="home">
    <auth-form @submit="onSubmit" authType="Register" />
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>
  
<script>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { appx } from "../../firebase";
import authForm from "@/components/auth-form.vue";
export default {
  components: { authForm },
  methods: {
    onSubmit(value) {
      const auth = getAuth(appx);
      createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          alert("Successfully registered! Please login.");
          console.log(userCredential);
          this.$router.replace('home')
        })
        .catch((error) => {
          alert(error.message);
        });

    },
  },
};
</script>