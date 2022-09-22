<template>
    <div class="home">
      <auth-form @submit="onSubmit" authType="Register"/>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword,getAuth} from "firebase/auth";
  
  import { app } from "../../firebase";
 import authForm from "@/components/auth-form.vue";
  export default {
    components: {authForm},
    methods: {
      onSubmit(value) {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          alert("Successfully registered! Please login.");
          console.log(userCredential);
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
      
      },
    },
  };
  </script>