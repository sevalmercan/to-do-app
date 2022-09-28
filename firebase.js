import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8n9jyGnjZxQt6KzCsKkIvY1l8b1s9Mas",
  authDomain: "to-do-app-f006c.firebaseapp.com",
  databaseURL: "https://to-do-app-f006c-default-rtdb.firebaseio.com",
  projectId: "to-do-app-f006c",
  storageBucket: "to-do-app-f006c.appspot.com",
  messagingSenderId: "490477489766",
  appId: "1:490477489766:web:da832f8762d1373492e7a7",
  measurementId: "G-1N5JN8LQB4",
};

// Initialize Firebased
export const firebaseApp = initializeApp(firebaseConfig);
