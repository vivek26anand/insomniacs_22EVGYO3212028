import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn-bIzqwIZXL2RKYAqznbkcaUlsotgzl8",
  authDomain: "rentlinq-f9320.firebaseapp.com",
  projectId: "rentlinq-f9320",
  storageBucket: "rentlinq-f9320.appspot.com",
  messagingSenderId: "245090054182",
  appId: "1:245090054182:web:8a9d17eecfaa082d9af6e7",
  measurementId: "G-P7BD6B4G3Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };