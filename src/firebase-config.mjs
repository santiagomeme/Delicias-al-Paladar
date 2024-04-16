import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyAyS2PlL0HT6h-qRlAXaH9OkAErBskPLUk",
  authDomain: "delicias-al-paladar-689f1.firebaseapp.com",
  projectId: "delicias-al-paladar-689f1",
  storageBucket: "delicias-al-paladar-689f1.appspot.com",
  messagingSenderId: "1056297896059",
  appId: "1:1056297896059:web:064ff624eacb8566aabade",
  measurementId: "G-KT73MRTHF0"
};


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// Inicializa la aplicación
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseConfig, db, auth };

