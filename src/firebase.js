import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBehnwenHxkp7y8lOEVaVjLNeKPvG90U8s",
  authDomain: "clone-4f567.firebaseapp.com",
  databaseURL: "https://clone-4f567.firebaseio.com",
  projectId: "clone-4f567",
  storageBucket: "clone-4f567.appspot.com",
  messagingSenderId: "1020390966362",
  appId: "1:1020390966362:web:6fa9924f60f9406a6e0463",
  measurementId: "G-5G71RQTNLV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
