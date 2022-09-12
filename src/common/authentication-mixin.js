import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase";
const auth = getAuth(app);

export default {
  methods: {
    register() {
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
    logOut() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
