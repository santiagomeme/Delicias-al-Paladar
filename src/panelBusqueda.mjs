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
  