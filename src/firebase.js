// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6YZitxLxNrjEDYwx_6HQ6n3vmplz-ih8",
  authDomain: "realtor-c388f.firebaseapp.com",
  projectId: "realtor-c388f",
  storageBucket: "realtor-c388f.appspot.com",
  messagingSenderId: "718599217995",
  appId: "1:718599217995:web:a5a11fb699d180ae583ece"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()