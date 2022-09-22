<template>
  <div class="home">
    <auth-form @submit="onSubmit" authType="Login"/>
  </div>
</template>

<script>
import { signInWithEmailAndPassword ,getAuth} from "firebase/auth";

import { app } from "../../firebase";
import authForm from "@/components/auth-form.vue";
export default {
  components: {authForm},
  methods: {
    onSubmit(value) {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, value.email, value.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
