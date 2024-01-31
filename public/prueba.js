

// Agrega esta línea al principio de tu script
window.fbAsyncInit = function() {
  FB.init({
    appId: '928300531633759',
    autoLogAppEvents: true,
    xfbml: true,
    version:  'v19.0'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

// Agrega este fragmento de código después de la inicialización de tu script
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


document.addEventListener('DOMContentLoaded', function () {
  function onResize() {

var productos = [{
    id: 1,
    nombre: "Pollo",
    precio: 120000,
    detalle: "Hawallano, Verduras, Agridulce"
  }, {
    id: 2,
    nombre: "carne",
    precio: 6000
  }, {
    id: 3,
    nombre: "Pezcado",
    precio: 6000
  }, {
    id: 4,
    nombre: "postre",
    precio: 6000
  }, {
    id: 5,
    nombre: "vaso",
    precio: 6000
  },{
    id: 6,
    nombre: "lapiz",
    precio: 6000
  }, {
    id: 7,
    nombre: "BMW",
    precio: 6000
  }, {
    id: 8,
    nombre: "avion",
    precio: 6000
  }, {
    id: 9,
    nombre: "omni",
    precio: 6000
  }, {
    id: 10,
    nombre: "naturaleza",
    precio: 6000
  }, {
    id: 11,
    nombre: "playa",
    precio: 6000
  }, {
    id: 12,
    nombre: "oceano",
    precio: 6000
  },{
    id: 13,
    nombre: "celular ",
    precio: 6000
  }, {
    id: 14,
    nombre: "mansion",
    precio: 6000
  }, {
    id: 15,
    nombre: "juego",
    precio: 6000
  }];



  var contadorCarrito = 0;
  var carrito = [];
    // Verifica si el clic no ocurrió dentro del panel de resultados

  const productoCatalogoHTML = (producto) => {
    return`
      <div class="col">
        <div class="card">
          <img
            src="https://loremflickr.com/100/100/${producto.nombre}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <div id="detalle-${producto.id}" class="detalle" style="display: none;">
            <p>Detalle: ${producto.detalle}</p></div>            
            <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
            <button id="btn-detalle-${producto.id}" class="btn btn-info">Detalles</button>

          </div>
        </div>
      </div>`;
  };
  const productoCarritoHTML = (producto) => {
    return`
      <div class="col">
        <div class="card">
          <img
            src="https://loremflickr.com/100/100/${producto.nombre}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <div id="detalle-${producto.id}" style="display: none;">
            <p>Detalle: ${producto.detalle}</p></div>               
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
            <button id="btn-detalle-${producto.id}" class="btn btn-info">Detalles</button>

          </div>
        </div>
      </div>`;
  };
  const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";
  
    for (const producto of productos) {
      catalogoHTML += productoCatalogoHTML(producto);
    }
  
    catalogoNodo.innerHTML = catalogoHTML;
    botonesCatalogo();
  };
  const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
  
    let carritoHTML = "";
    let precio = 0;
     for (const producto of carrito) {
      carritoHTML += productoCarritoHTML(producto);
      precio += producto.precio;
    }
  
    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
  };
  
  const botonesCatalogo = () => {
    for (const producto of productos) {
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const productoCarrito = {
          nombre: producto.nombre,
          idCompra: contadorCarrito,
          precio: producto.precio,
        };
  
        contadorCarrito += 1;
        carrito.push(productoCarrito);
        mostrarCarrito();
      });
    }
  };
  
  const botonesCarrito = () => {
    for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        carrito.splice(index, 1);
        mostrarCarrito();
        
      });
    }
  };
  
  mostrarCatalogo();

  console.log(productoCatalogoHTML(productos[0]));
  
    





  

// Añade estas funciones al final de tu archivo JS

const abrirDetalleProductoPanel = (producto) => {
  const detallePanel = document.getElementById("detalle");
  
  // Si el detalle está visible, ocúltalo
  if (detallePanel.style.display === "block") {
    detallePanel.style.display = "none";
  } else {
    // Si el detalle está oculto, actualiza y muestra
    detallePanel.innerHTML = `<p>Detalle: ${producto.detalle}</p>`;
    detallePanel.style.display = "block";
  }
};


const abrirPanelFlotante = () => {
  const detalleProductoPanel = document.getElementById("detalleProductoPanel");
  const panelFlotante = document.getElementById("panelFlotante");

  detalleProductoPanel.style.display = "none";
  panelFlotante.style.display = "block";
};





// Llamar a ambas funciones para agregar los listeners
const botonesCatalogoDetalle = () => {
  for (const producto of productos) {
    const botonId = `btn-detalle-${producto.id}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      toggleDetalleVisibilidad(producto.id);
    });
  }
};

const toggleDetalleVisibilidad = (productoId) => {
  const detalleId = `detalle-${productoId}`;
  const detalleNodo = document.getElementById(detalleId);

  // Alterna la visibilidad del detalle
  detalleNodo.classList.toggle("mostrar");
};


// Llama a esta función después de cargar la página








  FB.login(function(response) {
    // handle the response
  }, {scope: 'public_profile,email'});

  FB.login(function(response) {
    if (response.status === 'connected') {
      // Logged into your webpage and Facebook.
    } else {
      // The person is not logged into your webpage or we are unable to tell. 
    }
  });

  FB.logout(function(response) {
    // Person is now logged out
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


function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}


function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}






  


function validar() {
  var correo = document.querySelector('input[type="text"]').value;
  var password = document.querySelector('input[type="password"]').value;
  if (correo.length == 0 || password.length == 0) {
    alert("hace falta uno de los dos campos");
    return console.log(false);
  } else return true;
}







function validarRegistro() {
  var correo = document.getElementById("correoRegistro").value;
  var password = document.getElementById("passwordRegistro").value;

  // Realiza la validación básica (puedes agregar más validaciones según tus necesidades)
  if (!correo || !password) {
    alert("Por favor, completa todos los campos.");
    return false; // Impide que se envíe el formulario si hay campos vacíos
  }

  // autenticación con Google o Facebook
  // Utiliza las APIs proporcionadas por estas plataformas para manejar la autenticación

  // Regresa `false` para evitar que se envíe el formulario de inmediato
  var app = firebase.initializeApp(firebaseConfig);

  // Crear un nuevo usuario con Firebase
  (0, _firebase.createUserWithEmailAndPassword)(_firebase.auth, correo, password).then(function (userCredential) {
    // Registro exitoso
    var user = userCredential.user;
    console.log("Usuario registrado: ", user);

    // Mostrar el nombre del usuario en la parte superior
    document.getElementById("nombreUsuario").innerText = "\xA1Hola, ".concat(user.email, "!");
  })["catch"](function (error) {
    console.error("Error de registro: ", error);
  });

  // Restablecer los campos del formulario
  document.getElementById("correoRegistro").value = "";
  document.getElementById("passwordRegistro").value = "";
  return false;
}


// ...

// Obtener referencia al botón de inicio de sesión
var buttonInicio = document.getElementById("buttonInicio");

// Agregar evento click al botón de inicio de sesión
buttonInicio.addEventListener("click", function () {
  validarInicioSesion();
});

// Resto de tu código...

// Función para validar el inicio de sesión
function validarInicioSesion() {
  var correo = document.getElementById("correoRegistro").value;
  var password = document.getElementById("passwordRegistro").value;

  // Realizar la validación básica
  if (!correo || !password) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

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
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error de inicio de sesión:", errorMessage);
      // Puedes mostrar un mensaje de error al usuario u otras acciones según tus necesidades
      alert("Error de inicio de sesión: " + errorMessage);
    });

  // Restablecer los campos del formulario
  document.getElementById("correoRegistro").value = "";
  document.getElementById("passwordRegistro").value = "";

  return false; // Impedir que se envíe el formulario si hay campos vacíos
}

// ...




// Obtiene el botón y el cuadro de registro
var mostrarRegistro = document.getElementById("mostrarRegistro");
var registroBox = document.getElementById("registroBox");

//  BOTON Agrega un evento click al botón
mostrarRegistro.addEventListener("click", function () {
  // Utiliza window.getComputedStyle para obtener el estilo actual del elemento
  var estiloRegistroBox = window.getComputedStyle(registroBox);

  if (estiloRegistroBox.display === "none" || estiloRegistroBox.display === "block") {
    // Cambia la propiedad display basándote en la lógica deseada
    registroBox.style.display = "flex";  // Cambia a la propiedad que desees
  } else {
    registroBox.style.display = "none";
  }
});

// Obtener referencias a los botones
var googleSignInButton = document.getElementById("googleSignInButton");
var facebookSignInButton = document.getElementById("facebookSignInButton");

// Manejar clic en el botón de inicio de sesión con Google
googleSignInButton.addEventListener("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // El usuario se autenticó con éxito
    var user = result.user;
    console.log("Usuario autenticado: ", user);
  })["catch"](function (error) {
    // Ocurrió un error durante la autenticación
    console.error("Error de autenticación: ", error);
  });
});

// Manejar clic en el botón de inicio de sesión con Facebook (requiere configuración adicional)
//facebookSignInButton.addEventListener("click", function () {
  // Implementa la lógica de inicio de sesión con Facebook aquí
  // Esto puede requerir configuración adicional, como la inclusión del SDK de Facebook
//});




// Obtiene el botón y el contenedor de compra
var mostrarCompraButton = document.getElementById("mostrarCompra");
var panelFlotante = document.getElementById("panelFlotante");

// Agrega un evento click al botón
mostrarCompraButton.addEventListener("click", function () {
  // Verifica si el panel flotante está visible
  if (panelFlotante.style.display === "none" || panelFlotante.style.display === "") {
    // Muestra el panel flotante
    panelFlotante.style.display = "block";
  } else {
    // Oculta el panel flotante
    panelFlotante.style.display = "none";
  }
});

// Función para cerrar el panel flotante
function cerrarPanelFlotante() {
  panelFlotante.style.display = "none";
}

var totalCarrito=0;

function actualizarPanel() {
  const itemsPanel = document.getElementById('items-panel');
  const totalPanelElement = document.getElementById('total-panel');

  // Limpia el contenido previo
  itemsPanel.innerHTML = '';

  // Muestra cada producto en el panel flotante
  carrito.forEach((producto) => {
    const item = document.createElement('div');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    itemsPanel.appendChild(item);
  });

  // Muestra el total en el panel flotante
  totalPanelElement.textContent = totalCarrito;
}







var nuevoValorDelCarrito=[];
// Código para actualizar el valor del carrito
var precioTotalElement = document.getElementById("precioTotal");
// Actualiza el contenido del elemento con el nuevo valor del carrito
precioTotalElement.textContent = nuevoValorDelCarrito;


var carrito = [];
let precioTotal = 0;

// Función para agregar un artículo al carrito
function agregarAlCarrito(item) {
  carrito.push(item);
  precioTotal += item.precio;
  actualizarCarrito();
}

// ... (código existente)
var totalCarrito =0;
// Función para actualizar la visualización del carrito y el panel flotante
function actualizarCarrito() {
  const carritoElement = document.getElementById("carrito");
  const precioTotalElement = document.getElementById("precioTotal");
  const itemsPanel = document.getElementById('items-panel');
  const totalPanelElement = document.getElementById('total-panel');

  // Limpia el contenido actual del carrito
  carritoElement.innerHTML = "";

  // Rellena el carrito con los elementos actuales
  carrito.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.nombre} - ${item.precio} USD`;
    carritoElement.appendChild(itemElement);
  });

  // Actualiza el precio total
  precioTotalElement.textContent = `${precioTotal} USD`;

  // Muestra cada producto en el panel flotante
  itemsPanel.innerHTML = '';
  carrito.forEach((producto) => {
    const item = document.createElement('div');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    itemsPanel.appendChild(item);
  });

  // Muestra el total en el panel flotante
  totalPanelElement.textContent = precioTotal;

  // También puedes llamar a la función que actualiza el enlace de Nequi aquí si es necesario
  // actualizarEnlaceNequi();
}


// Resto de tu código...




var btnBuscar = document.getElementById("btnBuscar");
var panelBusqueda = document.getElementById("panelBusqueda");
var inputBusqueda = document.getElementById("inputBusqueda");

// Evento al hacer clic en el botón de búsqueda
btnBuscar.addEventListener("click", function (event) {
  // Detiene la propagación del clic para evitar que se cierre el panel
  event.stopPropagation();
  panelBusqueda.style.display = "block";
});

// Evento al escribir en el campo de búsqueda
inputBusqueda.addEventListener("input", function (event) {
  // Obtén el término de búsqueda actual
  var terminoBusqueda = inputBusqueda.value.toLowerCase();

  // Realiza la búsqueda y muestra los resultados
  var resultados = buscarProductos(terminoBusqueda);
  mostrarResultados(resultados);
});

// Evento para cerrar el panel cuando se hace clic fuera de él
document.addEventListener("click", function () {
  panelBusqueda.style.display = "none";
});

function buscarProductos(termino) {
  // Filtra los productos que coinciden con el término de búsqueda
  return productos.filter(function (producto) {
    return producto.nombre.toLowerCase().includes(termino);
  });
}

function mostrarResultados(resultados) {
  var listaResultados = document.createElement("ul");
  var panelBusqueda = document.getElementById("panelBusqueda");

  // Limpia el contenido actual del panel de búsqueda
  panelBusqueda.innerHTML = "";

  // Muestra los resultados en una lista
  resultados.forEach(function (producto) {
    var item = document.createElement("li");
    item.textContent = producto.nombre;
    listaResultados.appendChild(item);
  });

  // Agrega la lista de resultados al panel de búsqueda
  panelBusqueda.appendChild(listaResultados);

  panelBusqueda.style.display = "block";
}



// Función para enviar un correo electrónico de confirmación al cliente
function enviarCorreoConfirmacion(customerId) {
  // Obtén la dirección de correo electrónico del cliente desde tu base de datos
  const direccionCorreo = obtenerDireccionCorreoCliente(customerId);

  // Configura el correo electrónico
  const mailOptions = {
    from: 'santiagomendoza960@gmail.com',
    to: direccionCorreo,
    subject: 'Confirmación de Pedido',
    text: 'Gracias por tu compra. Tu pedido ha sido completado con éxito.',
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });


  // Lógica para enviar un correo electrónico de confirmación al cliente
  console.log('Enviando correo de confirmación al cliente: ' + customerId);


// Función para enviar un correo electrónico de notificación al administrador
function enviarCorreoNotificacionAdmin(mensaje) {
  // Lógica para enviar un correo electrónico de notificación al administrador
  console.log('Enviando correo de notificación al administrador: ' + mensaje);
}

}








// Función para obtener la dirección de correo electrónico del cliente desde la base de datos
function obtenerDireccionCorreoCliente(customerId) {
  // Supongamos que tienes un modelo de cliente en tu base de datos
  // y cada cliente tiene un campo 'correoElectronico'

  // Esto es solo un ejemplo ficticio, asegúrate de ajustarlo a tu lógica real
  return Cliente.findOne({ id: customerId }).select('correoElectronico').exec()
    .then(cliente => {
      if (cliente) {
        return cliente.correoElectronico;
      } else {
        console.error('Cliente no encontrado en la base de datos');
        return null;
      }
    })
    .catch(error => {
      console.error('Error al obtener la dirección de correo electrónico del cliente:', error);
      return null;
    });
}








//error de la targeta
document.getElementById('tarjeta').addEventListener('input', function () {
  // Obtén el valor del campo de tarjeta
  var tarjetaInput = document.getElementById('tarjeta');
  // Obtén el elemento del mensaje de error
  var errorTarjeta = document.getElementById('error-tarjeta');

  // Verifica la longitud del número de tarjeta
  if (tarjetaInput.value.length < 16) {
    // Muestra el mensaje de error
    errorTarjeta.style.display = 'block';
  } else {
    // Oculta el mensaje de error
    errorTarjeta.style.display = 'none';
  }
});




var btnBuscar = document.getElementById("btnBuscar");
var inputBusqueda = document.getElementById("inputBusqueda");
var resultadoBusqueda = document.getElementById("resultadoBusqueda");

// Resto de tu código...
// Evento al escribir en el campo de búsqueda
inputBusqueda.addEventListener("input", function () {
  var terminoBusqueda = inputBusqueda.value.toLowerCase();
  var resultados = buscarProductos(terminoBusqueda);
  mostrarResultados(resultados);

  // Mostrar el panel solo cuando hay resultados
  if (resultados.length > 0) {
    resultadoBusqueda.style.display = "block";
  } else {
    resultadoBusqueda.style.display = "none";
  }
});

function mostrarResultados(resultados) {
  // Limpia el contenido actual del contenedor de resultados de búsqueda
  resultadoBusqueda.innerHTML = "";

  // Muestra los resultados en el contenedor
  resultados.forEach(function (producto) {
    var item = document.createElement("div");
    item.innerHTML = productoCatalogoHTML(producto); // Utiliza la función que genera el HTML del producto
    resultadoBusqueda.appendChild(item);
  });

  // Muestra el contenedor de resultados de búsqueda
  resultadoBusqueda.style.display = "block";
}

document.addEventListener('click', function (event) {
  // Verifica si el clic no ocurrió dentro del panel de resultados
  if (!resultadoBusqueda.contains(event.target)) {
    // Oculta el panel de resultados
    resultadoBusqueda.style.display = 'none';
  }
});



//pago con Nequi





// Ejemplo utilizando addEventListener
var btnNequi = document.getElementById("btnNequi"); // Reemplaza "btnNequi" con el ID real de tu botón de Nequi
btnNequi.addEventListener("click", realizarPagoNequi);

// Función para realizar el pago con Nequi
function realizarPagoNequi() {
  // Calcula el total del carrito
  totalCarrito= carrito.reduce(function (total, producto) {
    return total + producto.precio;
  }, 0);

  // Otros detalles para el pago con Nequi
  var numeroTelefono = "3177505231";
  var referencia = "REFERENCIA";

  // Genera el enlace con los valores dinámicos para Nequi
  var enlaceNequi = "nequi://pay?phone=" + numeroTelefono + "&amount=" + totalCarrito + "&reference=" + referencia;

  // Redirecciona al enlace de Nequi
  window.location.href = enlaceNequi;
}



function redirigirANequi() {
  // Cambia la URL con la que redirigirás a la aplicación de Nequi
  window.location.href = 'https://play.google.com/store/apps/details?id=com.nequi.MobileApp';
}


function verificarNequi() {
  // Verifica si el usuario tiene Nequi instalado
  if (usuarioTieneNequi()) {
    // El usuario tiene Nequi, realiza el pago
    realizarPagoNequi();
  } else {
    // El usuario no tiene Nequi, redirige para descargar
    redirigirADescargaNequi();
  }
}


    function descargarNequi() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
      // Redirige a la App Store si el usuario está en un dispositivo iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/co/app/nequi-colombia/id1075378688";
      } else if (/android/i.test(userAgent)) {
        // Redirige a la Google Play Store si el usuario está en un dispositivo Android
        window.location.href = 'https://play.google.com/store/apps/details?id=com.nequi.MobileApp';
      } else {    
        alert('Descarga Nequi desde la tienda de aplicaciones correspondiente a tu dispositivo.');
      }
    }


    function usuarioTieneNequi() {
      // Verifica si el navegador es un dispositivo móvil
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Intenta abrir un enlace que podría abrir Nequi (puedes personalizar este enlace)
        var nequiLink = "nequi://";
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = nequiLink;
        document.body.appendChild(iframe);
    
        // Espera un tiempo y verifica si el navegador pudo abrir Nequi
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 2000); // Espera 2 segundos (ajusta según sea necesario)
    
        return true; // Devuelve true, asumiendo que el enlace se ha abierto correctamente
      }
    
      // Si no es un dispositivo móvil, no puedes verificar la instalación de la aplicación
      return false;
    }
    
  document.getElementById("btnNequi").addEventListener("click", verificarNequi);

  botonesCatalogoDetalle();
 
  console.log('La ventana cambió de tamaño');

}
window.addEventListener('resize', onResize);

});






