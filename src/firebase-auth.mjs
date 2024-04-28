
import { firebaseConfig } from './firebase-config.mjs';
import 'firebase/auth';
import firebaseui from 'firebaseui';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 

const auth = getAuth();
const db = getFirestore();
console.log("esta funcionando el firebase-auth")
firebase.initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // Por ejemplo, podrías redirigir al usuario a una página específica después del inicio de sesión.
      window.location.assign( 'https://delicias-al-paladar-689f1.web.app/? ');
      return false; // Devuelve false para evitar la redirección automática
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'https://delicias-al-paladar-689f1.web.app/?',
  signInOptions: [
    // Proveedor de autenticación de Google
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Puedes personalizar más opciones para el proveedor de Google aquí si es necesario.
    },
    // Proveedor de autenticación de Facebook
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // Puedes personalizar más opciones para el proveedor de Facebook aquí si es necesario.
    },
    // correo
    {
     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,

    }
  ], 

 // Terms of service url.
  tosUrl: 'https://delicias-al-paladar-689f1.web.app/?condicioneServicios',
  // Privacy policy url.
  privacyPolicyUrl: 'https://delicias-al-paladar-689f1.web.app/?Politicas'
};


ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        // Forces password re-entry.
        auth_type: 'reauthenticate'
      }
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
  ]
});

// Is there an email link sign-in?
if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  ui.start('#firebaseui-auth-container', uiConfig);
}



const initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = 'Signed in';
        document.getElementById('sign-in').textContent = 'Sign out';
        document.getElementById('account-details').textContent = JSON.stringify({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          phoneNumber: phoneNumber,
          photoURL: photoURL,
          uid: uid,
          accessToken: accessToken,
          providerData: providerData
        }, null, '  ');
      });
    } else {
      // User is signed out.
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp()
});

function validarRegistro() {
  // Obtener los valores de los campos de entrada
  var correo = document.getElementById('correoRegistro').value;
  var password = document.getElementById('passwordRegistro').value;

  // Validar que los campos no estén vacíos
  if (correo.trim() === '' || password.trim() === '') {
      alert('Por favor completa todos los campos.');
      return false; // Devolver false para evitar el envío automático del formulario
  }

  // Validar el formato del correo electrónico (opcional)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
      alert('Por favor introduce un correo electrónico válido.');
      return false; // Devolver false si el formato del correo es inválido
  }

  // Puedes agregar más validaciones aquí según tus requerimientos

  // Devolver true si todas las validaciones pasan
  return true;
}

document.getElementById('buttonRegistro').addEventListener('click', function() {
  validarRegistro();
});

document.getElementById('buttonInicioSesion').addEventListener('click', function() {
  validarInicioSesion();
});


function validarInicioSesion() {
  // Obtener los valores de los campos de entrada
  var correo = document.getElementById('correoInicio').value;
  var password = document.getElementById('passwordInicio').value;

  // Validar que los campos no estén vacíos
  if (correo.trim() === '' || password.trim() === '') {
      alert('Por favor completa todos los campos.');
      return false; // Devolver false para evitar el envío automático del formulario
  }

  // Puedes agregar más validaciones aquí según tus requerimientos

  // Devolver true si todas las validaciones pasan
  return true;
}


document.getElementById('googleSignInButton').addEventListener('click', function() {
  // Crea una instancia del proveedor de autenticación de Google
  var provider = new firebase.auth.GoogleAuthProvider();

  // Inicia el proceso de inicio de sesión con Google
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
      // Aquí puedes manejar el resultado del inicio de sesión exitoso
      var user = result.user;
      console.log('Inicio de sesión exitoso con Google. Usuario:', user);
  })
  .catch((error) => {
      // Aquí puedes manejar cualquier error que ocurra durante el inicio de sesión
      console.error('Error al iniciar sesión con Google:', error);
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const authForm = document.getElementById('authForm');
  const authButton = document.getElementById('authButton');
  const switchAuthText = document.getElementById('switchAuthText');
  const switchAuthLink = document.getElementById('switchAuthLink');

  let isRegistering = true; // Inicialmente, el usuario está registrándose

  // Cambiar el texto del botón y el enlace según si el usuario está registrándose o iniciando sesión
  function toggleAuthState() {
      isRegistering = !isRegistering;
      if (isRegistering) {
          authButton.textContent = 'Registrarse';
          switchAuthText.textContent = '¿Ya tienes una cuenta?';
          switchAuthLink.textContent = 'Inicia sesión aquí';
      } else {
          authButton.textContent = 'Iniciar Sesión';
          switchAuthText.textContent = '¿No tienes una cuenta?';
          switchAuthLink.textContent = 'Regístrate aquí';
      }
  }

  // Manejar el evento de clic en el enlace para alternar entre registro e inicio de sesión
  switchAuthLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      toggleAuthState(); // Cambiar el estado de autenticación
  });

  // Manejar el envío del formulario
  authForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
      // Aquí puedes agregar la lógica para manejar el registro o inicio de sesión según el estado actual
      if (isRegistering) {
          // Lógica para registrar al usuario
          console.log('Registrando usuario...');
      } else {
          // Lógica para iniciar sesión
          console.log('Iniciando sesión...');
      }
  });
});





function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    testAPI();  
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}



function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';

      
        // Mostrar el nombre del usuario en un div
        document.getElementById('user-info').innerHTML =
            'Welcome, ' + response.name + '!';

  });
}


// Llamada a loginWithFacebook en respuesta a un evento, por ejemplo, clic en un botón de inicio de sesión
document.getElementById('facebookSignInButton').addEventListener('click', function() {
  loginWithFacebook();
});

// Llamada a logoutIfConnected en respuesta a un evento, por ejemplo, clic en un botón de cierre de sesión
document.getElementById('logoutButton').addEventListener('click', function() {
  logoutIfConnected();
});






export default {
  auth,
  db
};




