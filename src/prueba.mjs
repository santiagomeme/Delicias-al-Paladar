import './firebase-config.mjs';
import './firebase-auth.mjs';


document.addEventListener('DOMContentLoaded', function () {

var productos = [{
    id: 1,
    nombre: "Gordon Blue",
    precio: 120000,
    detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",
    imagen: "cenaGordonBlue.jpg"

  }, {
    id: 2,
    nombre: "Filete de Pollo relleno ",
    precio: 6000,
    detalle: "Rellenos: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa",
    imagen: "filete-relleno.jpg"

  },{
    id: 3,
    nombre: "Cena con Gordon Blue ",
    detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",
    imagen: "cenaGordonBlue2.jpg"

  }, {
    id: 4,
    nombre: "Cenas con Rollo e Pollo",
    precio: 100.000,
    detalle: "Rollo de Pollo Relleno de: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa. Acompañadp de Ensalada, y un Acompañante para 10 Personas x $100.000",
    imagen: "cenaRollo.jpg"

  }, {
    id: 5,
    nombre: "Lomo de Cerdo",
    precio: 12.000,
    detalle: "Lomo de Cerdo en Salsa, Acompañado de Ensalada y 1 Acompañante",
    imagen: "cerdoSalsa.jpg"

  },{
    id: 6,
    nombre: "Comida Rapida",
    precio: 6000,
    detalle: "Hamburguesa Tradicional $ , super Cronch $ , Infantil $, Perros $ , Infantil $ , Snaks de Pollo $ , Lasagñas $ , Quesadillas $ , Alitas $  ",
    imagen: "comidaRapida.jpg"

  }, {
    id: 7,
    nombre: "Cenas para Eventos",
    precio: 11.000,
    detalle: "Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",
    imagen: "comiEventos.jpg"

  }, {
    id: 8,
    nombre: "Comida para Eventos",
    precio: 11.000,
    detalle: "Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",
    imagen: "comiEventos2.jpg"

  }, {
    id: 9,
    nombre: "",
    precio: 3.500,
    detalle: "Postres y Mini Postres para Eventos",
    imagen: "miniPostres.jpg"

  }, {
    id: 10,
    nombre: "Rollo de Pollo Relleno",
    precio: 100.000,
    detalle: "Hawallano, Verduras, Agridulce. Acompañado de Ensalada y un Acompañante para 10 personas x $100.000",
    imagen: "RolloPollo.jpg"

  }];



  var contadorCarrito = 0;
  var carrito = [];

  const productoCatalogoHTML = (producto) => {
    return`
      <div class="col">
        <div class="card">
          <img
          src="${producto.imagen}"
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
          src="${producto.imagen}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <div id="detalle-${producto.id}" style="display: none;">
            <p>Detalle:${producto.detalle}</p></div>               
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
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
  
    




// Obtiene el botón y el cuadro de registro
var mostrarRegistro = document.getElementById("mostrarRegistro");
var registroBox = document.getElementById("registroBox");
var mostrarRegistroButton = document.getElementById("mostrarRegistroButton");

//  BOTON Agrega un evento click al botón
if (mostrarRegistro) {
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
}

// Verifica si el botón de mostrar registro existe antes de agregar el event listener
if (mostrarRegistroButton && registroBox) {
  mostrarRegistroButton.addEventListener("click", function (event) {
    event.stopPropagation();  // Evita que el clic se propague al documento
    var estiloRegistroBox = window.getComputedStyle(registroBox);
    if (estiloRegistroBox.display === "none" || estiloRegistroBox.display === "block") {
      registroBox.style.display = "flex";
    } else {
      registroBox.style.display = "none";
    }
  });
}

// Agrega un event listener al documento para detectar clics en cualquier lugar
document.addEventListener("click", function (event) {
  // Verifica si el clic fue fuera del registroBox
  if (!registroBox.contains(event.target) && event.target !== mostrarRegistroButton) {
    registroBox.style.display = "none";
  }
});


function abrirPanelDetalles() {
  const detalleProductoPanel = document.getElementById("detalleProductoPanel");
  detalleProductoPanel.classList.remove("oculto");
    detalleProductoPanel.classList.add("mostrar");
}

const toggleDetalleVisibilidad = (productoId) => {
  const detalleId = `detalle-${productoId}`;
  const detalleNodo = document.getElementById(detalleId);
// Alterna la visibilidad del detalle
  detalleNodo.classList.toggle("mostrar");
  abrirPanelDetalles();
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

botonesCatalogoDetalle();


// Evento para mostrar el carrito al hacer clic en el botón
document.getElementById("btnMostrarCarrito").addEventListener("click", mostrarCarrito);

// Evento para ocultar el carrito al hacer clic fuera de él
document.addEventListener("click", (event) => {
  const contenedorCarrito = document.getElementById("contenedorCarrito");
  const btnMostrarCarrito = document.getElementById("btnMostrarCarrito");

  if (!contenedorCarrito.contains(event.target) && event.target !== btnMostrarCarrito) {
    contenedorCarrito.style.display = "none";
  }
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

//chat de wattsap
function abrirChatWhatsApp() {
  // Reemplaza '123456789' con tu número de WhatsApp (con el código de país)
  console.log("Función abrirChatWhatsApp ejecutada");

  var numeroWhatsApp = '57 3177505231';

  // Crea el enlace de Chat de WhatsApp
  var enlaceChatWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=Hola%20Quisiera%20hacerte%20una%20consulta.';

  // Abre el enlace en una nueva ventana o pestaña
  window.open(enlaceChatWhatsApp);
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
document.getElementById('loginButton').addEventListener('click', function() {
  loginWithFacebook();
});

// Llamada a logoutIfConnected en respuesta a un evento, por ejemplo, clic en un botón de cierre de sesión
document.getElementById('logoutButton').addEventListener('click', function() {
  logoutIfConnected();
});



var panelBusqueda = document.getElementById("panelBusqueda");
var inputBusqueda = document.getElementById("inputBusqueda");
var resultadoBusqueda = document.getElementById("resultadoBusqueda");

// Evento al escribir en el campo de búsqueda
inputBusqueda.addEventListener("input", function () {
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
  // Limpia el contenido actual del contenedor de resultados de búsqueda
  resultadoBusqueda.innerHTML = "";

  if (resultados.length > 0) {
    panelBusqueda.style.display = "block";
  } else {
    panelBusqueda.style.display = "none";
  }
  
}





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
        }, 2000); // Espera 2 segundos
      return true; // Devuelve true, asumiendo que el enlace se ha abierto correctamente
      }
    // Si no es un dispositivo móvil, no puedes verificar la instalación de la aplicación
      return false;
    }
document.getElementById("btnNequi").addEventListener("click", verificarNequi);
  botonesCatalogoDetalle();
  console.log('La ventana cambió de tamaño');
  




//window.addEventListener('resize', onResize);
//});

})