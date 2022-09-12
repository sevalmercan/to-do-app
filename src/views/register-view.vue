<template>
  <div>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, this.email, this.password)
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
