import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHTJhcbWnmgOPTEk9uecBrJKKzh1SDltU",
  authDomain: "ntnui-paddling.firebaseapp.com",
  databaseURL: "https://ntnui-paddling.firebaseio.com",
  projectId: "ntnui-paddling",
  storageBucket: "ntnui-paddling.appspot.com",
  messagingSenderId: "1013895161872",
  appId: "1:1013895161872:web:662491935ade095404c295",
  measurementId: "G-CD1810NNG5",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export { storage, firebase as default };
