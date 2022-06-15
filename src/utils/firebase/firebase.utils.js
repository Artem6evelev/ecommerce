import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHNErVuE-ykmEP8C4WfDgc-9t9Z9kgpE0",
  authDomain: "crwn-clothing-db-30c74.firebaseapp.com",
  projectId: "crwn-clothing-db-30c74",
  storageBucket: "crwn-clothing-db-30c74.appspot.com",
  messagingSenderId: "532852957854",
  appId: "1:532852957854:web:f3d34ffae4fb7f428e518f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
