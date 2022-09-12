<template>
  <div class="home">
    <div>
      <form @submit.prevent="login" class="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="password..." v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

export default {
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
}
</style>
