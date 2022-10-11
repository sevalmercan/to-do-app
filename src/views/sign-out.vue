<template>
  <div>
    <button @click="logOut" class="button">SIGN OUT</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "@firebaseToDo";
export default {
  methods: {
    logOut() {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(() => {
          this.$router.push({ path: '/' })
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.button {
  border-radius: 18px;
  background-color: white;
  width: 13vw;
  border: 3px solid $primary-color-gray;
}
</style>
