
document.addEventListener('DOMContentLoaded', function () {

var productos = [{
    id: 1,
    nombre: "Gordon Blue",
    precio: 120000,
    detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",
    imagen: "../images/cenaGordonBlue.jpg"

  }, {
    id: 2,
    nombre: "Filete de Pollo relleno ",
    precio: 6000,
    detalle: "Rellenos: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa",
    imagen: "../images/filete-relleno.jpg"

  },{
    id: 3,
    nombre: "Cena con Gordon Blue ",
    precio: 11000,
    detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",
    imagen: "../images/cenaGordonBlue2.jpg"

  }, {
    id: 4,
    nombre: "Cenas con Rollo de Pollo",
    precio: 100000,
    detalle: "Rollo de Pollo Relleno de: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa. Acompañadp de Ensalada, y un Acompañante para 10 Personas x $100.000",
    imagen: "../images/cenaRollo.jpg"

  }, {
    id: 5,
    nombre: "Lomo de Cerdo",
    precio: 12000,
    detalle: "Lomo de Cerdo en Salsa, Acompañado de Ensalada y 1 Acompañante",
    imagen: "../images/cerdoSalsa.jpg"

  },{
    id: 6,
    nombre: "Comida Rapida",
    precio: 6000,
    detalle: "Hamburguesa Tradicional $10000 , super Cronch 13000$ ,Hamburguesa Infantil $, Perros $ ,Perro Infantil $ , Snaks de Pollo $ 8000, Lasagñas $12000 , Quesadillas $8000 , Alitas $ 10000 ",
    imagen: "../images/comidaRapida.jpg"

  }, {
    id: 7,
    nombre: "Cenas para Eventos",
    precio: 11000,
    detalle: "Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",
    imagen: "../images/comiEventos.jpg"

  }, {
    id: 8,
    nombre: "Comida para Eventos",
    precio: 11000,
    detalle: "Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",
    imagen: "../images/comiEventos2.jpg"

  }, {
    id: 9,
    nombre:"Postres",
    precio: 3500,
    detalle: "Postres y Mini Postres para Eventos",
    imagen: "../images/miniPostres.jpg"

  }, {
    id: 10,
    nombre: "Rollo de Pollo Relleno",
    precio: 100000,
    detalle: "Hawallano, Verduras, Agridulce. Acompañado de Ensalada y un Acompañante para 10 personas x $100.000",
    imagen: "../images/RolloPollo.jpg"

  }];



  var contadorCarrito = 0;
  var carrito = [];

  const productoCatalogoHTML = (producto) => {
    return`
      <div class="col-md-3" class="productoTam">
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
          <img src="${producto.imagen}" class="card-img-top"" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <div id="detalle-${producto.id}" style="display: none;">
            <p class="card-text">Precio: ${producto.precio}</p>
            <p class="card-text">Detalle: ${producto.detalle}</p> <!-- Mostrar detalle del producto -->
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
            <button id="btn-detalle-carrito-${producto.idCompra}" class="btn btn-info">Detalles</button>
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
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) {
        carritoHTML += productoCarritoHTML(producto);
        precio += producto.precio;
    }
  
    precioNodo.textContent = precio;
    carritoNodo.innerHTML = carritoHTML;

    // Mostrar el contenedor del carrito
    contenedorCarrito.style.display = "block";

    botonesCarrito(); // Asegurarse de que los botones del carrito estén configurados correctamente
};

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


 // const mostrarCarrito = () => {
 //   const carritoNodo = document.getElementById("carrito");
 //   const precioNodo = document.getElementById("precioTotal");
 // 
 //   let carritoHTML = "";
 //   let precio = 0;
 //    for (const producto of carrito) {
 //     carritoHTML += productoCarritoHTML(producto);
 //     precio += producto.precio;
  //  }
  
  //  precioNodo.innerHTML = precio;
  //  carritoNodo.innerHTML = carritoHTML;
  //  botonesCarrito();
  //};
  
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

    
      const botonDetalleId = `btn-detalle-${producto.id}`; // Obtener el ID del botón de detalle
      const botonDetalleNodo = document.getElementById(botonDetalleId); // Obtener el nodo del botón de detalle

      // Agregar evento de clic al botón de detalle
      botonDetalleNodo.addEventListener("click", () => {
          const detalleNodo = document.getElementById(`detalle-${producto.id}`); // Obtener el nodo del detalle del producto

         
            // Verificar si el detalle está visible
            const isVisible = detalleNodo.style.display === "block";

            // Ocultar todos los detalles de productos
            productos.forEach((p) => {
                const detalle = document.getElementById(`detalle-${p.id}`);
                detalle.style.display = "none";
            });

            // Mostrar u ocultar el detalle del producto según su estado actual
            detalleNodo.style.display = isVisible ? "none" : "block";

            // Evitar que el evento se propague al hacer clic en el botón de detalles
            event.stopPropagation();
      });


    }
  };
  



  const botonesCarrito = () => {
    carrito.forEach(producto => {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", (event) => {
        event.stopPropagation(); // Evitar que el evento se propague al contenedor del carrito
        const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        carrito.splice(index, 1);
        mostrarCarrito();
        
      });
    })
  };


  mostrarCatalogo();
console.log(productoCatalogoHTML(productos[0]));
  
    // Agregar un controlador de eventos al documento para ocultar todos los detalles cuando se hace clic fuera de ellos
document.addEventListener("click", (event) => {
  // Iterar sobre todos los detalles de productos
  for (const producto of productos) {
      const detalleNodo = document.getElementById(`detalle-${producto.id}`); // Obtener el nodo del detalle del producto

      // Verificar si el clic no ocurrió dentro del detalle del producto
      if (detalleNodo.style.display === "block" && !detalleNodo.contains(event.target)) {
          detalleNodo.style.display = "none"; // Ocultar el detalle del producto
      }
  }

  // Iterar sobre todos los detalles de productos en el carrito
  for (const producto of carrito) {
      const detalleNodo = document.getElementById(`detalle-${producto.id}`); // Obtener el nodo del detalle del producto

      // Verificar si el clic no ocurrió dentro del detalle del producto
      if (detalleNodo.style.display === "block" && !detalleNodo.contains(event.target)) {
          detalleNodo.style.display = "none"; // Ocultar el detalle del producto
      }
  }
});

document.getElementById('toggleTopPanel').addEventListener('click', function() {
  var topPanel = document.getElementById('top-panel');
  if (topPanel.style.display === 'none') {
      topPanel.style.display = 'block'; // Muestra el top panel
  } else {
      topPanel.style.display = 'none'; // Oculta el top panel
  }
});




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




var registroBox = document.querySelector('.registro-box');
var offsetX, offsetY;

registroBox.addEventListener('mousedown', function(event) {
    // Calcular la distancia entre la esquina superior izquierda del cuadro de registro y la posición del mouse
    offsetX = event.clientX - registroBox.getBoundingClientRect().left;
    offsetY = event.clientY - registroBox.getBoundingClientRect().top;

    // Agregar un controlador de eventos para el movimiento del mouse mientras se mantiene presionado
    document.addEventListener('mousemove', onMouseMove);
    
    // Agregar un controlador de eventos para soltar el botón del mouse
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
    // Calcular la nueva posición del cuadro de registro basándose en la posición actual del mouse y las distancias calculadas
    var newLeft = event.clientX - offsetX;
    var newTop = event.clientY - offsetY;

    // Establecer la nueva posición del cuadro de registro
    registroBox.style.left = newLeft + 'px';
    registroBox.style.top = newTop + 'px';
}

function onMouseUp() {
    // Eliminar los controladores de eventos de movimiento del mouse y de soltar el botón del mouse
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}








var panelBusqueda = document.getElementById("panelBusqueda");
var inputBusqueda = document.getElementById("inputBusqueda");

// Evento al escribir en el campo de búsqueda
inputBusqueda.addEventListener("input", function () {
  // Obtén el término de búsqueda actual
  var terminoBusqueda = inputBusqueda.value.toLowerCase();
      // Realiza la búsqueda y muestra los resultados
  var resultados = buscarProductos(terminoBusqueda);
  mostrarResultados(resultados);
});





document.addEventListener("click", function (event) {
  // Verifica si el clic no ocurrió dentro del panel de búsqueda o en el campo de entrada de búsqueda
  if (!panelBusqueda.contains(event.target) && event.target !== inputBusqueda) {
    panelBusqueda.style.display = "none";
  }
});

function buscarProductos(termino) {
  // Filtra los productos que coinciden con el término de búsqueda
  return productos.filter(function (producto) {
    return producto.nombre.toLowerCase().includes(termino);
  });
}

function mostrarResultados(resultados) {
// Limpia el contenido actual del panel de búsqueda
  panelBusqueda.innerHTML = "";
  // Muestra los resultados en una lista
  resultados.forEach(function (producto) {
    var card = document.createElement("div");
    card.classList.add("card"); // Agrega la clase "card" para estilos CSS
    card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}</p>
        <p class="card-text">${producto.detalle}</p>
      </div>
    `;
    panelBusqueda.appendChild(card);

  });
  panelBusqueda.style.display = "block";
}

// Función para hacer un elemento arrastrable
function makeDraggable(element) {
  let offsetX, offsetY;

  element.addEventListener('mousedown', function(event) {
      // Calcular la distancia entre la esquina superior izquierda del elemento y la posición del mouse
      offsetX = event.clientX - element.getBoundingClientRect().left;
      offsetY = event.clientY - element.getBoundingClientRect().top;

      // Agregar un controlador de eventos para el movimiento del mouse mientras se mantiene presionado
      document.addEventListener('mousemove', onMouseMove);
      
      // Agregar un controlador de eventos para soltar el botón del mouse
      document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(event) {
      // Calcular la nueva posición del elemento basándose en la posición actual del mouse y las distancias calculadas
      var newLeft = event.clientX - offsetX;
      var newTop = event.clientY - offsetY;

      // Establecer la nueva posición del elemento
      element.style.left = newLeft + 'px';
      element.style.top = newTop + 'px';
  }

  function onMouseUp() {
      // Eliminar los controladores de eventos de movimiento del mouse y de soltar el botón del mouse
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
  }
}

// Aplicar la función makeDraggable al panel de resultados
var resultadoBusqueda = document.getElementById("resultadoBusqueda");
makeDraggable(resultadoBusqueda);





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

//abrir chat de wattsap
function abrirChatWhatsApp() {
  console.log("Función abrirChatWhatsApp ejecutada");

  var numeroWhatsApp = '573177505231';

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
document.getElementById('facebookSignInButton').addEventListener('click', function() {
  loginWithFacebook();
});

// Llamada a logoutIfConnected en respuesta a un evento, por ejemplo, clic en un botón de cierre de sesión
document.getElementById('logoutButton').addEventListener('click', function() {
  logoutIfConnected();
});







document.getElementById('whatsappButton').addEventListener('click', function() {
  var phoneNumber = '573177505231'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
  var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber;

  // Intenta abrir la aplicación de WhatsApp
  window.open(whatsappUrl, '_blank');

  // Verifica si el navegador admite el protocolo de WhatsApp
  setTimeout(function() {
    var isWhatsAppSupported = document.hasFocus();
    if (!isWhatsAppSupported) {
      // Si el navegador no admite el protocolo de WhatsApp, redirige al usuario a la tienda de aplicaciones para descargar WhatsApp
      window.location.href = 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=es&gl=US'; // URL de la tienda de aplicaciones de WhatsApp en Google Play Store
    }
  }, 1000); // Espera un segundo antes de verificar si la aplicación de WhatsApp se abrió correctamente
});




//window.addEventListener('resize', onResize);
//});

})