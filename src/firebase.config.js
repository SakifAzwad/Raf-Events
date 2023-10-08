// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4WNU-wBWFR9-NQxwvKz0yJN2d8pgYrKw",
  authDomain: "raf-events.firebaseapp.com",
  projectId: "raf-events",
  storageBucket: "raf-events.appspot.com",
  messagingSenderId: "286929509249",
  appId: "1:286929509249:web:ca738d93826a70bc23a680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;