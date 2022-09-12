<template>
  <div>
    <button @click="logOut" class="button">SIGN OUT</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
export default {
  methods: {
    logOut() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          // An error happened.
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
.button {
  background-color: white;
  width: 13vw;
  border: 3px solid $primary-color-gray;
}
</style>
