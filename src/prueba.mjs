document.addEventListener('DOMContentLoaded', function () {

    var productos = [{

        id: 1,
        nombre: "Gordon Blue",
        precio: 11000,
        detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",
        imagen: "images/cenaGordonBlue.jpg"
    
      }, {
        id: 2,
        nombre: "Filete de Pollo relleno ",
        precio: 11000,
        detalle: "Rellenos: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa",
        imagen: "images/filete-relleno.jpg"
    
      },{
        id: 3,
        nombre: "Cena con Gordon Blue ",
        precio: 11000,
        detalle: "Gordon Blue Relleno de Jamon y Queso, Acompañado de Ensalada, y un Acompañante",
        imagen: "images/cenaGordonBlue2.jpg"
    
      }, {
        id: 4,
        nombre: "Cenas con Rollo de Pollo",
        precio: 100000,
        detalle: "Rollo de Pollo Relleno de: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa. Acompañadp de Ensalada, y un Acompañante para 10 Personas x $100.000",
        imagen: "images/cenaRollo.jpg"
    
      }, {
        id: 5,
        nombre: "Lomo de Cerdo",
        precio: 12000,
        detalle: "Lomo de Cerdo al Horno Bañado en Salsa, Acompañado de Ensalada y 1 Acompañante",
        imagen: "images/cerdoSalsa.jpg"
    
      },{
        id: 6,
        nombre: "Comida Rapida",
        precio: 6000,
        detalle: "Hamburguesa Tradicional $10000 , super Cronch 13000$ ,Hamburguesa Infantil $, Perros $ ,Perro Infantil $ , Snaks de Pollo $ 8000, Lasagñas $12000 , Quesadillas $8000 , Alitas $ 10000 ",
        imagen: "images/comidaRapida.jpg"
    
      }, {
        id: 7,
        nombre: "Pollo Relleno",
        precio: 120000,
        detalle: "Rellenos: Hawallano, Verduras, Agridulce. Acompañado de Ensalada y un Acompañante para 10 personas x $120.000",
        imagen: "images/PolloRelleno.jpg"
      }, {
        id: 8,
        nombre: "Chuleta de Pollo",
        precio: 11000,
        detalle: "Chuleta de Pollo Acompañada de ensalada y un Acompañante x $11.000.",
        imagen: "images/chuletaPollo.jpg"
    
      }, {
        id: 9,
        nombre:"Postres",
        precio: 3500,
        detalle: "Postres de Diferentes Sabores y Mini Postres",
        imagen: "images/miniPostres.jpg"
    
      }, {
        id: 10,
        nombre: "Pernil de Pollo",
        precio: 11000,
        detalle: "Pernil de Pollo al Horno en Salsa o en Verduras. Acompañado de Ensalada y un Acompañante  x $11.000",
        imagen: "images/PernilPollo.jpg"
      }, {
        id: 11,
        nombre: "Picada Marinera",
        precio: 100000,
        detalle: "Camaron, Calamar, Cangrejo Apanados Acompañados de Papas a la Francesa con Salsas y Ajies",
        imagen: "images/PicadaMarinera.jpg"
    
      }, {
        id: 12,
        nombre: "Cazuela de Mariscos o Camaron",
        precio: 120000,
        detalle: "Cazuela de Mariscos o Camaron Grande Acompañada de Arroz Coco, Tostadas de Platano o Papas a la Francesa para 5 Personas x $135.000",
        imagen: "images/Cazuela.jpg"
    
      }, {
        id: 13,
        nombre: "Trucha Camaronera",
        precio: 20000,
        detalle: "Trucha en salsa de camarones, acompañada de Ensalada y un Acompañante x $20.000",
        imagen: "images/TruchaCama.PNG"
        
    },{
    id: 14,
    nombre: "Triple de Camaron",
    precio: 30000,
    detalle: "Camaron en 3 presentaciones sudado, apanado y en salsa ajillo, acompañado de ensalada y un Acompañante x $14.500",
    imagen: "images/4.PNG"
 
   },{
  id: 15,
  nombre: "Salmon",
  precio: 30000,
  detalle: "Salomon a la plancha o en una salsa de tu eleccion, acompañado de Ensalada y un Acompañante x $30.000",
  imagen: "images/6.PNG"

 },{
id: 16,
nombre: "Lomo President",
precio: 15500,
detalle: "Lomo de res relleno de verduras en salsa de tu eleccion y acompañado de Ensalada y un Acompañante x $14.500",
imagen: "images/11.PNG"

},{
id: 17,
nombre: "Arroz Chaufa",
precio: 18000,
detalle: "Arroz chaufa compuesto de camaron, calamar, pescado, mejillon y pulpo x $18.000",
imagen: "images/Chaufa.png"

}
,{
  id: 18,
  nombre: "Arroz Marinero",
  precio: 18000,
  detalle: "Arroz marinero con camaron, calamar, mejillones, pulpo, pescado y verduras x $18.000",
  imagen: "images/ArrozMarineros.png"
  
  }
  ,{
id: 19,
nombre: "Bagre",
precio: 15000,
detalle: "Presa de bagre sudada acompañada de Ensalada y un Acompañante x $15.000",
imagen: "images/BagreSu.png"

}
,{
  id: 20,
  nombre: "Bagre Frito",
  precio: 15000,
  detalle: "Presa de bagre frita acompañada de Ensalada y un Acompañante x $15.00",
  imagen: "images/BagreFritos.png"
  
  }
,{
id: 21,
nombre: "Filete de Tilapia",
precio: 15000,
detalle: "Filete de Tilapia a la plancha o en salsa, acompañado de Ensalada y un Acompañante x $15.000",
imagen: "images/FiletePlanc.png"

}  
,{
  id: 22,
  nombre: "Lasaña Camaron y Espinaca",
  precio: 15000,
  detalle: "Lasaña de camarones y espinaca en salsa de queso, acompañada de pan frances o papas a la francesa, o tostadas de platano x $15.000",
  imagen: "images/lasañaEspi.png"
  
  }
  ,{
    id: 23,
    nombre: "lomo Cran Berry",
    precio: 12000,
    detalle: "Lomo de cerdo en salsa Cran Berry, Acompañado de Ensalada y un Acompañante x $12.000",
    imagen: "images/LomoCranBe.png"
    
    }
,{
id: 24,
nombre: "Pollo a la Naranja",
precio: 11000,
detalle: "Pollo a la naranja, Acompañado de Ensalada y un Acompañante x $11.000",
imagen: "images/imagenesListasP/1.PNG"

}
,{
  id: 25,
  nombre: "Trucha Ahumada",
  precio: 14500,
  detalle: "Trucha Ahumada, Acompañada de Ensalada y un Acompañante x $14.500",
  imagen: "images/truchaHumo.PNG"
  
  },{
    id: 26,
    nombre: "Filete en champiñones",
    precio: 12000,
    detalle: "Filete de pollo en salsa champiñones, acompañado de Ensalada y un Acompañante x $14.500",
    imagen: "images/imagenesListasP/FileteChampi.PNG"
    
    }


]
    
    
      var contadorCarrito = 0;
      var carrito = [];
    
      const productoCatalogoHTML = (producto) => {
        return `
          <div class="col-md-3 productoTam">
            <div class="card">
              <img src="${producto.imagen}" class="card-img-top"/>
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <div id="detalle-${producto.id}" class="detalle" style="display: none;">
                  <p>Detalle del Producto: ${producto.detalle}</p>
                </div>
                <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
                <button id="btn-detalle-${producto.id}" class="btn btn-info">Detalles</button>
              </div>
            </div>
          </div>`;
      };
      const productoCarritoHTML = (producto) => {
        return `
          <div class="col">
            <div class="card">
              <img src="${producto.imagen}" class="card-img-top"/>
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                <div class="d-flex justify-content-between">
                  <button id="btn-disminuir-${producto.idCompra}" class="btn btn-secondary btn-sm">-</button>
                  <button id="btn-aumentar-${producto.idCompra}" class="btn btn-secondary btn-sm">+</button>
                  <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger btn-sm">Quitar</button>
                </div>
              </div>
            </div>
          </div>`;
    };

    
      
    
      const mostrarCatalogo = () => {
        const catalogoContenedor = document.getElementById("catalogo");
        catalogoContenedor.innerHTML = "";
      
        for (const producto of productos) {
          const productoHTML = productoCatalogoHTML(producto);
          catalogoContenedor.innerHTML += productoHTML;
        }
      
        // Llama a la función para asignar eventos después de generar el HTML de los productos
        botonesCatalogo();
      };
      


  const mostrarCarrito = () => {
        const carritoContenedor = document.getElementById("carrito");
        if (!carritoContenedor) {
          console.error("El contenedor del carrito no se encuentra en el DOM.");
          return;
        }
      
        // Limpia el contenido del carrito antes de agregar nuevos elementos
        carritoContenedor.innerHTML = "";
      
        let totalCarrito = 0; // Inicializa el total del carrito
      
        // Agrega cada producto del carrito al contenedor
        for (const producto of carrito) {
          const productoHTML = productoCarritoHTML(producto);
          carritoContenedor.innerHTML += productoHTML;
          
          // Calcula el total del carrito
          totalCarrito += producto.precio * producto.cantidad;
        }
      
        // Muestra el total del carrito
        carritoContenedor.innerHTML += `
          <p class="total-carrito">Total: $${totalCarrito}</p>
        `;
      
      
        // Agrega el botón de enviar por WhatsApp con la clase CSS correcta
        carritoContenedor.innerHTML += `
        <button id="btnEnviarWhatsApp" class="btn btn-success mt-3 whatsapp-button">Enviar por WhatsApp</button>
         `;

       // Añade el evento al botón de enviar por WhatsApp
       const btnEnviarWhatsApp = document.getElementById("btnEnviarWhatsApp");
       if (btnEnviarWhatsApp) {
       btnEnviarWhatsApp.addEventListener("click", enviarCarritoPorWhatsApp);
       }


        
        // Muestra el contenedor del carrito
        const contenedorCarrito = document.getElementById("contenedorCarrito");
        if (contenedorCarrito) {
          contenedorCarrito.style.display = "block"; // Cambia a 'block' para mostrar el contenedor
        } else {
          console.error("El contenedor del carrito no se encuentra en el DOM.");
        }
      
        botonesCarrito(); // Llama a esta función para agregar eventos de clic a los botones "Quitar"
    };
      
      








 const btnMostrarCarrito = document.getElementById("btnMostrarCarrito");

if (btnMostrarCarrito) {
  btnMostrarCarrito.addEventListener("click", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto, si aplica
    event.stopPropagation(); // Detiene la propagación del evento para evitar conflictos

    const contenedorCarrito = document.getElementById("contenedorCarrito");

    // Alterna la visibilidad del carrito
    if (contenedorCarrito.style.display === "none" || contenedorCarrito.style.display === "") {
      contenedorCarrito.style.display = "block";
      console.log("Carrito mostrado, display: block");
      mostrarCarrito(); // Mostrar los elementos del carrito cuando se muestra
    } else {
      contenedorCarrito.style.display = "none";
      console.log("Carrito ocultado, display: none");
    }
  });
} else {
  console.error("El botón para mostrar el carrito no se encuentra en el DOM.");
}




// Evento para ocultar el carrito al hacer clic fuera de él
document.addEventListener("click", function (event) {
  const contenedorCarrito = document.getElementById("contenedorCarrito");

  // Solo oculta el carrito si se hace clic fuera de él y si está visible
  if (
    contenedorCarrito &&
    !contenedorCarrito.contains(event.target) &&
    event.target !== btnMostrarCarrito && // Asegura que no se oculte al hacer clic en el botón
    contenedorCarrito.style.display === "block"
  ) {
    contenedorCarrito.style.display = "none";
    console.log("Clic fuera del carrito, ocultando el carrito.");
  }
});

    

const botonesCatalogo = () => {
  for (const producto of productos) {
    const botonId = `btn-catalogo-${producto.id}`;
    const botonDetalleId = `btn-detalle-${producto.id}`;
    const botonNodo = document.getElementById(botonId);
    const botonDetalleNodo = document.getElementById(botonDetalleId);

    // Evento para el botón de "Agregar al carrito"
    if (botonNodo) {
      botonNodo.addEventListener("click", () => {
        // Busca si el producto ya está en el carrito
        const productoExistente = carrito.find(p => p.idCompra === producto.id);

        if (productoExistente) {
          // Incrementa la cantidad si el producto ya está en el carrito
          productoExistente.cantidad++;
        } else {
          // Agrega el producto con cantidad inicial de 1
          const productoCarrito = {
            nombre: producto.nombre,
            idCompra: producto.id,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1 // Nueva propiedad de cantidad
          };
          carrito.push(productoCarrito);
        }

        mostrarCarrito(); // Muestra el carrito actualizado
      });
    }

    // Evento para el botón de "Detalles"
    if (botonDetalleNodo) {
      botonDetalleNodo.addEventListener("click", () => {
        const detalleNodo = document.getElementById(`detalle-${producto.id}`);
        if (detalleNodo) {
          // Alterna la visibilidad de los detalles del producto
          detalleNodo.style.display = detalleNodo.style.display === 'none' ? 'block' : 'none';
        } else {
          console.error(`No se encontró el detalle del producto con id: ${producto.id}`);
        }
      });
    }
  }
};

// Supongamos que esta función renderiza el catálogo de productos en el DOM
const renderizarCatalogo = () => {
  const catalogoContenedor = document.getElementById("catalogo");
  catalogoContenedor.innerHTML = ""; // Limpia el catálogo actual

  productos.forEach(producto => {
    catalogoContenedor.innerHTML += productoCatalogoHTML(producto);
  });

  botonesCatalogo(); // Llama a la función después de renderizar
};

// Llama a la función para renderizar el catálogo al cargar la página
renderizarCatalogo();

    
const botonesCarrito = () => {
  carrito.forEach((producto) => {
    const botonIdEliminar = `btn-carrito-${producto.idCompra}`;
    const botonNodoEliminar = document.getElementById(botonIdEliminar);

    const botonIdAumentar = `btn-aumentar-${producto.idCompra}`;
    const botonNodoAumentar = document.getElementById(botonIdAumentar);

    const botonIdDisminuir = `btn-disminuir-${producto.idCompra}`;
    const botonNodoDisminuir = document.getElementById(botonIdDisminuir);

    // Evento para eliminar producto
    if (botonNodoEliminar) {
      botonNodoEliminar.addEventListener("click", (event) => {
        event.stopPropagation(); // Evitar que el evento se propague al contenedor del carrito
        const index = carrito.findIndex((p) => p.idCompra === producto.idCompra);
        if (index !== -1) {
          carrito.splice(index, 1);
          mostrarCarrito();
        }
      });
    } else {
      console.error(`Botón de eliminar con ID ${botonIdEliminar} no encontrado`);
    }

    // Evento para aumentar cantidad
    if (botonNodoAumentar) {
      botonNodoAumentar.addEventListener("click", (event) => {
        event.stopPropagation();
        producto.cantidad += 1;
        mostrarCarrito(); // Refresca el carrito para mostrar el cambio en la cantidad
      });
    } else {
      console.error(`Botón de aumentar con ID ${botonIdAumentar} no encontrado`);
    }

    // Evento para disminuir cantidad
    if (botonNodoDisminuir) {
      botonNodoDisminuir.addEventListener("click", (event) => {
        event.stopPropagation();
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
        } else {
          // Eliminar producto si la cantidad es menor a 1
          const index = carrito.findIndex((p) => p.idCompra === producto.idCompra);
          if (index !== -1) {
            carrito.splice(index, 1);
          }
        }
        mostrarCarrito(); // Refresca el carrito para mostrar el cambio en la cantidad
      });
    } else {
      console.error(`Botón de disminuir con ID ${botonIdDisminuir} no encontrado`);
    }
  });
};



  function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  }
  
  // Hacer que la función esté disponible globalmente
  window.toggleVisibility = toggleVisibility;

 
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



  document.getElementById('botonWhatsAppCarrito').addEventListener('click', enviarCarritoPorWhatsApp);

  function enviarCarritoPorWhatsApp() {
    let mensaje = "Hola! Quiero realizar un pedido:\n";
    carrito.forEach(producto => {
      mensaje += `- ${producto.nombre} (Cantidad: ${producto.cantidad})\n`;
    });
  
    const numeroWhatsApp = '573177505231';
    const enlaceChatWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  
    window.open(enlaceChatWhatsApp, '_blank');
  }
  
  // Agregar evento para el botón de WhatsApp
  document.getElementById('whatsappButton').addEventListener('click', enviarCarritoPorWhatsApp);
  
    
      mostrarCatalogo();
    console.log(productoCatalogoHTML(productos[0]));
      
    
 
    
   

       
    
    
    
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
    

    
    })
    
    
      
    