// Importa solo lo necesario de firebase/app
import { initializeApp } from 'firebase/app';
// Importa funciones específicas de firebase/auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { firebaseApp } from './firebase-config';

// Inicializa la aplicación con la configuración
initializeApp(config);
// Registra un nuevo usuario

// Función para mostrar el correo del usuario
function mostrarCorreoUsuario(correo) {
  document.getElementById("user-email").textContent = correo;
  document.getElementById("user-info").style.display = "block";
}

// Función para ocultar el div de información del usuario
function ocultarInfoUsuario() {
  document.getElementById("user-info").style.display = "none";
}



document.getElementById("buttonRegistro").addEventListener("click", function () {
  var correo = document.getElementById("correoRegistro").value;
  var password = document.getElementById("passwordRegistro").value;

  // Realizar la validación básica
  if (!correo || !password) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Lógica para registrar un nuevo usuario
  createUserWithEmailAndPassword(correo, password)
    .then((userCredential) => {
      // Manejar el registro exitoso
      var user = userCredential.user;
      console.log("Usuario registrado:", user);
          // Mostrar información del usuario
      mostrarCorreoUsuario(correo);

    })
    .catch((error) => {
      // Manejar errores durante el registro
      var errorMessage = error.message;
      console.error("Error de registro:", errorMessage);
      // Mostrar un mensaje de error al usuario o realizar otras acciones según sea necesario
      alert("Error de registro: " + errorMessage);
    });

  return false; // Impedir que se envíe el formulario si hay campos vacíos
});

document.getElementById("buttonInicio").addEventListener("click", function () {
  var correo = document.getElementById("correoInicio").value;
  var password = document.getElementById("passwordInicio").value;

  // Realizar la validación básica
  if (!correo || !password) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Lógica para iniciar sesión
  signInWithEmailAndPassword(correo, password)
    .then((userCredential) => {
      // Manejar el inicio de sesión exitoso
      var user = userCredential.user;
      console.log("Inicio de sesión exitoso:", user);
      // Mostrar información del usuario
    mostrarCorreoUsuario(correo);

    })
    .catch((error) => {
      // Manejar errores durante el inicio de sesión
      var errorMessage = error.message;
      console.error("Error de inicio de sesión:", errorMessage);
      // Mostrar un mensaje de error al usuario o realizar otras acciones según sea necesario
      alert("Error de inicio de sesión: " + errorMessage);
    });

  return false; // Impedir que se envíe el formulario si hay campos vacíos
});


// Restablecer contraseña
export const resetPassword = (correo) => {
  return sendPasswordResetEmail(firebaseApp.auth(), correo)
    .then(() => {
      // Manejar el envío de correo de restablecimiento exitoso
      console.log("Correo de restablecimiento enviado con éxito. Verifica tu bandeja de entrada.");
      // Puedes realizar acciones adicionales si es necesario
      // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
      alert("Correo de restablecimiento enviado con éxito. Verifica tu bandeja de entrada.");
    })
    .catch((error) => {
      // Manejar errores durante el envío del correo de restablecimiento
      console.error("Error al enviar el correo de restablecimiento:", error);
      // Mostrar un mensaje de error al usuario o realizar otras acciones según sea necesario
      alert("Error al enviar el correo de restablecimiento: " + error.message);
    });
};

// Restablecer los campos del formulario
export const resetForm = () => {
  document.getElementById("correoRegistro").value = "";
  document.getElementById("passwordRegistro").value = "";
  return false; // Impedir que se envíe el formulario si hay campos vacíos
};


  export const createUserWithEmailAndPassword = (email, password) => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  };
  
  export const signInWithEmailAndPassword = (email, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  };
  