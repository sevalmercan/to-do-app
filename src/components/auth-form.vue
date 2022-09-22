<template>
  <div class="home">
      <form @submit.prevent="authFunc" class="login">
        <h2>{{ authType }}</h2>
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="password..." v-model="password" />
        <button type="submit">{{ authType }}</button>
      </form>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  props: {
    authType:String
  },
  data() {
    return {
      email: "",
      password: "",
   
    };
  },
  methods:{
    authFunc(){
      this.$emit('submit', {email :this.email,password:this.password});
    }
  }
  
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
