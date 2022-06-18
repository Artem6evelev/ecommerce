import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exists
  // create/ set document when user data in collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};
