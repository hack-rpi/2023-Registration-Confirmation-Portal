// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCC88arNUwvG0DuWvh40V24BJIs1uOYIuw",
    authDomain: "test-c216b.firebaseapp.com",
    projectId: "test-c216b",
    storageBucket: "test-c216b.appspot.com",
    messagingSenderId: "710684545537",
    appId: "1:710684545537:web:3eeb3bb4ddbf52abf06600"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = getFirestore(firebaseApp);

export { storage, db, firebase as default };