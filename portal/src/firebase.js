// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC88arNUwvG0DuWvh40V24BJIs1uOYIuw",
  authDomain: "test-c216b.firebaseapp.com",
  projectId: "test-c216b",
  storageBucket: "test-c216b.appspot.com",
  messagingSenderId: "710684545537",
  appId: "1:710684545537:web:eb2520e93976407df06600"
};


firebaseConfig.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);