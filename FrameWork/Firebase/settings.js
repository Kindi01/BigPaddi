// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK7tyNDHwJpmZpUpnxjqxTlb38xSrleJc",
  authDomain: "bigpaddi.firebaseapp.com",
  projectId: "bigpaddi",
  storageBucket: "bigpaddi.appspot.com",
  messagingSenderId: "523897326583",
  appId: "1:523897326583:web:e2a7bbfb36aa2f843cfcf2",
  measurementId: "G-2VH1XTSTC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app)
export const db = getFirestore(app)