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

    

// document.getElementById('toggleTopPanel').addEventListener('click', function() {
 //  var topPanel = document.getElementById('top-panel');
  // if (topPanel.style.display === 'none') {
   //    topPanel.style.display = 'block'; // Muestra el top panel
  // } else {
//       topPanel.style.display = 'none'; // Oculta el top panel
//   }
// });





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


})

