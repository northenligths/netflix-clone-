import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9x2ZK0G7ag9MDiEr0Q1vaZ3YCDUyI2sA",
  authDomain: "netflix-clone-53b82.firebaseapp.com",
  projectId: "netflix-clone-53b82",
  storageBucket: "netflix-clone-53b82.appspot.com",
  messagingSenderId: "672808463394",
  appId: "1:672808463394:web:5d4bef20935ce42ba6ee7b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
