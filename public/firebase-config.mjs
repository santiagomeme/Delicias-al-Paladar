import a from"firebase/app";import"firebase/firestore";import{getAuth as e}from"firebase/auth";import r from"firebaseui";import{initializeApp as i}from"firebase/app";const p={apiKey:"AIzaSyAyS2PlL0HT6h-qRlAXaH9OkAErBskPLUk",authDomain:"delicias-al-paladar-689f1.firebaseapp.com",projectId:"delicias-al-paladar-689f1",storageBucket:"delicias-al-paladar-689f1.appspot.com",messagingSenderId:"1056297896059",appId:"1:1056297896059:web:064ff624eacb8566aabade",measurementId:"G-KT73MRTHF0"},o=f.firestore(),s=f.auth(),f=i(p);export{p as firebaseConfig,o as db,s as auth};