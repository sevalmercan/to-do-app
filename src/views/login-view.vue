<template>
  <div class="home">
    <div>   
  <form @submit.prevent="login" class="login">     
    <h2>Login</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
</div>  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return{
      email:"",
      password:""
    }
  }

}
</script>

<style>
  .login{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
  }
</style>