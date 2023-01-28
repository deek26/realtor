// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyComcp6XsZzRsUgmeH9g5HdURPlLRUl31U",
  authDomain: "realtor-68718.firebaseapp.com",
  projectId: "realtor-68718",
  storageBucket: "realtor-68718.appspot.com",
  messagingSenderId: "900390106206",
  appId: "1:900390106206:web:4e42bd5d4f29eb67c1b0cf"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db=getFirestore()