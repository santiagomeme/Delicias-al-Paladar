import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyS2PlL0HT6h-qRlAXaH9OkAErBskPLUk",
  authDomain: "delicias-al-paladar-689f1.firebaseapp.com",
  projectId: "delicias-al-paladar-689f1",
  storageBucket: "delicias-al-paladar-689f1.appspot.com",
  messagingSenderId: "1056297896059",
  appId: "1:1056297896059:web:064ff624eacb8566aabade",
  measurementId: "G-KT73MRTHF0"
};


// Inicializa la aplicación
const firebaseApp = initializeApp(config);

// Exporta la instancia de autenticación
export const auth = getAuth(firebaseApp);