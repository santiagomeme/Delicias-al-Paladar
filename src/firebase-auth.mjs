// Importaciones necesarias
import { firebaseConfig } from './firebase-config.mjs';
import firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider } from 'firebase/auth';

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("Firebase Auth inicializado correctamente");

// Configuración de FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      window.location.assign('https://delicias-al-paladar-689f1.web.app/');
      return false; // Para evitar la redirección automática
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'https://delicias-al-paladar-689f1.web.app/',
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
      customParameters: { prompt: 'select_account' }
    },
    {
      provider: FacebookAuthProvider.PROVIDER_ID,
      scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
      customParameters: { auth_type: 'reauthenticate' }
    },
    EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://delicias-al-paladar-689f1.web.app/?condicioneServicios',
  privacyPolicyUrl: 'https://delicias-al-paladar-689f1.web.app/?Politicas'
};

ui.start('#firebaseui-auth-container', uiConfig);

// Manejo del estado de autenticación
const initApp = function() {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      user.getIdToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = 'Signed in';
        document.getElementById('sign-in').textContent = 'Sign out';
        document.getElementById('account-details').textContent = JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          accessToken: accessToken,
          providerData: user.providerData
        }, null, '  ');
      });
    } else {
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp();
});

// Validación de registro e inicio de sesión
function validarRegistro() {
  var correo = document.getElementById('correoRegistro').value;
  var password = document.getElementById('passwordRegistro').value;
  if (correo.trim() === '' || password.trim() === '') {
    alert('Por favor completa todos los campos.');
    return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert('Por favor introduce un correo electrónico válido.');
    return false;
  }
  return true;
}

function validarInicioSesion() {
  var correo = document.getElementById('correoInicio').value;
  var password = document.getElementById('passwordInicio').value;
  if (correo.trim() === '' || password.trim() === '') {
    alert('Por favor completa todos los campos.');
    return false;
  }
  return true;
}

document.getElementById('buttonRegistro').addEventListener('click', validarRegistro);
document.getElementById('buttonInicioSesion').addEventListener('click', validarInicioSesion);

// Inicio de sesión con Google
document.getElementById('googleSignInButton').addEventListener('click', function() {
  const provider = new GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log('Inicio de sesión exitoso con Google. Usuario:', result.user);
    })
    .catch((error) => {
      console.error('Error al iniciar sesión con Google:', error);
    });
});

// Alternar entre registro e inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
  const authForm = document.getElementById('authForm');
  const authButton = document.getElementById('authButton');
  const switchAuthText = document.getElementById('switchAuthText');
  const switchAuthLink = document.getElementById('switchAuthLink');
  let isRegistering = true;

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

  switchAuthLink.addEventListener('click', function(event) {
    event.preventDefault();
    toggleAuthState();
  });

  authForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (isRegistering) {
      console.log('Registrando usuario...');
    } else {
      console.log('Iniciando sesión...');
    }
  });
});

// Facebook Authentication
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();  
  } else {
    document.getElementById('status').innerHTML = 'Please log into this webpage.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';

    document.getElementById('user-info').innerHTML = 'Welcome, ' + response.name + '!';
  });
}

document.getElementById('facebookSignInButton').addEventListener('click', function() {
  loginWithFacebook();
});

document.getElementById('logoutButton').addEventListener('click', function() {
  logoutIfConnected();
});

export { auth };
export default { auth };
