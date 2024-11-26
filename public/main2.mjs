document.addEventListener('DOMContentLoaded', function () {

// Función para abrir el chat de WhatsApp desde el top-panel
function abrirChatWhatsApp() {
  console.log("Botón de WhatsApp en el top-panel presionado");

  const numeroWhatsApp = '573177505231';
  const enlaceChatWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Hola%20Quisiera%20hacerte%20una%20consulta.`;

  // Abre el enlace en una nueva ventana o pestaña
  window.open(enlaceChatWhatsApp, '_blank');
}

// Asigna el evento click al botón de WhatsApp en el top-panel
document.getElementById('whatsappButton').addEventListener('click', abrirChatWhatsApp);

    

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
  // Verifica si el clic fue fuera del registroBox
  document.addEventListener("click", function (event) {
  if (!registroBox.contains(event.target) && event.target !== mostrarRegistroButton) {
    registroBox.style.display = "none";
  }
});




var registroBox = document.querySelector('.registro-box');
var offsetX, offsetY;
if (registroBox) {
  registroBox.addEventListener('mousedown', function(event) {
      iniciarArrastre(registroBox, event);
  });
}

var carritoContenedor = document.getElementById('carritoContenedor');
if (carritoContenedor) {
    carritoContenedor.addEventListener('mousedown', function(event) {
        iniciarArrastre(carritoContenedor, event);
    });
}
function iniciarArrastre(elemento, event) {
  var offsetX = event.clientX - elemento.getBoundingClientRect().left;
  var offsetY = event.clientY - elemento.getBoundingClientRect().top;

  function onMouseMove(event) {
      var newLeft = event.clientX - offsetX;
      var newTop = event.clientY - offsetY;

      // Obtener dimensiones del viewport
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;

      // Obtener dimensiones del elemento
      var elementoWidth = elemento.offsetWidth;
      var elementoHeight = elemento.offsetHeight;

      // Restringir movimiento horizontal
      if (newLeft < 0) newLeft = 0;
      if (newLeft + elementoWidth > viewportWidth) newLeft = viewportWidth - elementoWidth;

      // Restringir movimiento vertical
      if (newTop < 0) newTop = 0;
      if (newTop + elementoHeight > viewportHeight) newTop = viewportHeight - elementoHeight;

      elemento.style.left = newLeft + 'px';
      elemento.style.top = newTop + 'px';
  }

  function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}


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


function iniciarArrastre(elemento, event) {
  var offsetX = event.clientX - elemento.getBoundingClientRect().left;
  var offsetY = event.clientY - elemento.getBoundingClientRect().top;

  function onMouseMove(event) {
      var newLeft = event.clientX - offsetX;
      var newTop = event.clientY - offsetY;

      // Establecer la nueva posición del elemento
      elemento.style.left = newLeft + 'px';
      elemento.style.top = newTop + 'px';
  }

  function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}




})

