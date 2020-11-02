import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqxTtGM34hc7pBy7WkyEGfmiUmA7I5BRA",
  authDomain: "simple-chat-app-f290f.firebaseapp.com",
  databaseURL: "https://simple-chat-app-f290f.firebaseio.com",
  projectId: "simple-chat-app-f290f",
  storageBucket: "simple-chat-app-f290f.appspot.com",
  messagingSenderId: "382576830998",
  appId: "1:382576830998:web:e8568cd8fa5e886b9d2337",
  measurementId: "G-J07DV287GF",
});

const db = firebaseApp.firestore();

export default db;
