import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHTJhcbWnmgOPTEk9uecBrJKKzh1SDltU",
  authDomain: "ntnui-paddling.firebaseapp.com",
  databaseURL: "https://ntnui-paddling.firebaseio.com",
  projectId: "ntnui-paddling",
  storageBucket: "ntnui-paddling.appspot.com",
  messagingSenderId: "1013895161872",
  appId: "1:1013895161872:web:5b8c67690400519304c295",
  measurementId: "G-6GRLHYH7G7",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
