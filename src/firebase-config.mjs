import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import { getFirestore,collection, doc, getDoc } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import 'firebase/auth';




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
const firebaseApp = initializeApp(firebaseConfig);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export { firebaseConfig };
