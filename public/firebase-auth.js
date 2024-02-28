
// Registra un nuevo usuario
firebase.auth().createUserWithEmailAndPassword(correo, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("Usuario registrado:", user);
  })
  .catch((error) => {
    console.error("Error de registro:", error);
  });o99999999oiju4 
  // Iniciar sesión con Firebase
  firebase.auth().signInWithEmailAndPassword(correo, password)
    .then(function (userCredential) {
      // Inicio de sesión exitoso
      var user = userCredential.user;
      console.log("Inicio de sesión exitoso:", user);
      // Puedes realizar acciones adicionales después del inicio de sesión
    })
    .catch(function (error) {
      // Manejar errores durante el inicio de sesión
      var errorMessage = error.message;
      console.error("Error de inicio de sesión:", errorMessage);
      // Puedes mostrar un mensaje de error al usuario u otras acciones según tus necesidades
      alert("Error de inicio de sesión: " + errorMessage);
    });
  // Restablecer los campos del formulario
  function restablecerFormulario() {
  document.getElementById("correoRegistro").value = "";
  document.getElementById("passwordRegistro").value = "";
  return false; // Impedir que se envíe el formulario si hay campos vacíos
  }


import { firebaseApp } from './firebase-config'; // Asegúrate de importar firebaseApp correctamente
import firebase from 'firebase/app';
import 'firebase/auth';


export const createUserWithEmailAndPassword = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export const resetPassword = (email) => {
  return firebaseApp.auth().sendPasswordResetEmail(email);
};


  // Función para iniciar sesión
export function iniciarSesion(correo, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(correo, password);
  }




