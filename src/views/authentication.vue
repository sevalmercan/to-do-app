<template>
  <div class="home">
    <nav>
      <router-link to="/">Sign In</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
    <div>
      <form @submit.prevent="authFunc" class="login">
        <h2>{{ authType }}</h2>
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="password..." v-model="password" />
        <button type="submit">{{ authType }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import authenticationMixin from "@/common/authentication-mixin";

export default {
  name: "HomeView",
  mixins: [authenticationMixin],
  props: ["authType"],
  data() {
    return {
      email: "",
      password: "",
      authFunc: "",
    };
  },
  created() {
    if (this.authType === "Login") {
      this.authFunc = this.login;
    } else {
      this.authFunc = this.register;
    }
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
