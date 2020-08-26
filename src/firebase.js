import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8AMbnOiByOGpzCSPxriIylJCBN3_dWes",
  authDomain: "clone-32645.firebaseapp.com",
  databaseURL: "https://clone-32645.firebaseio.com",
  projectId: "clone-32645",
  storageBucket: "clone-32645.appspot.com",
  messagingSenderId: "476215712388",
  appId: "1:476215712388:web:7aca0dd7a8a2321feb40d1",
  measurementId: "G-SS00Q1W397"
});

const auth = firebase.auth();

export { auth }; 