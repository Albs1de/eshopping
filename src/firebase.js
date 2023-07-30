// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDi9RNVCnSBb5Z3ej82T16-greRJzmUFk4",
  authDomain: "eshopping-2f50a.firebaseapp.com",
  projectId: "eshopping-2f50a",
  storageBucket: "eshopping-2f50a.appspot.com",
  messagingSenderId: "469335454417",
  appId: "1:469335454417:web:56ca625890178e795e8bf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
