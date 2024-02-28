import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth'; // No es necesario almacenar en una variable, Firebase se vuelve global
import 'firebase/firestore'; // No es necesario almacenar en una variable, Firebase se vuelve global

const firebaseConfig = {
  apiKey: "AIzaSyAyS2PlL0HT6h-qRlAXaH9OkAErBskPLUk",
  authDomain: "delicias-al-paladar-689f1.firebaseapp.com",
  projectId: "delicias-al-paladar-689f1",
  storageBucket: "delicias-al-paladar-689f1.appspot.com",
  messagingSenderId: "1056297896059",
  appId: "1:1056297896059:web:064ff624eacb8566aabade",
  measurementId: "G-KT73MRTHF0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);