(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=[{id:1,nombre:"Gordon Blue",precio:11e3,detalle:"Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",imagen:"images/cenaGordonBlue.jpg"},{id:2,nombre:"Filete de Pollo relleno ",precio:11e3,detalle:"Rellenos: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa",imagen:"images/filete-relleno.jpg"},{id:3,nombre:"Cena con Gordon Blue ",precio:11e3,detalle:"Gordon Blue Relleno de Jamon y Queso, Acompañado de Ensalada, y un Acompañante",imagen:"images/cenaGordonBlue2.jpg"},{id:4,nombre:"Cenas con Rollo de Pollo",precio:1e5,detalle:"Rollo de Pollo Relleno de: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa. Acompañadp de Ensalada, y un Acompañante para 10 Personas x $100.000",imagen:"images/cenaRollo.jpg"},{id:5,nombre:"Lomo de Cerdo",precio:12e3,detalle:"Lomo de Cerdo al Horno Bañado en Salsa, Acompañado de Ensalada y 1 Acompañante",imagen:"images/cerdoSalsa.jpg"},{id:6,nombre:"Comida Rapida",precio:6e3,detalle:"Hamburguesa Tradicional $10000 , super Cronch 13000$ ,Hamburguesa Infantil $, Perros $ ,Perro Infantil $ , Snaks de Pollo $ 8000, Lasagñas $12000 , Quesadillas $8000 , Alitas $ 10000 ",imagen:"images/comidaRapida.jpg"},{id:7,nombre:"Pollo Relleno",precio:12e4,detalle:"Rellenos: Hawallano, Verduras, Agridulce. Acompañado de Ensalada y un Acompañante para 10 personas x $120.000",imagen:"images/PolloRelleno.jpg"},{id:8,nombre:"Chuleta de Pollo",precio:11e3,detalle:"Chuleta de Pollo Acompañada de ensalada y un Acompañante x $11.000.",imagen:"images/chuletaPollo.jpg"},{id:9,nombre:"Postres",precio:3500,detalle:"Postres de Diferentes Sabores y Mini Postres",imagen:"images/miniPostres.jpg"},{id:11,nombre:"Pernil de Pollo",precio:11e3,detalle:"Pernil de Pollo al Horno en Salsa o en Verduras. Acompañado de Ensalada y un Acompañante  x $11.000",imagen:"images/PernilPollo.jpg"},{id:12,nombre:"Picada Marinera",precio:1e5,detalle:"Camaron, Calamar, Cangrejo Apanados Acompañados de Papas a la Francesa con Salsas y Ajies",imagen:"images/PicadaMarinera.jpg"},{id:13,nombre:"Cazuela de Mariscos o Camaron",precio:12e4,detalle:"Cazuela de Mariscos o Camaron Grande Acompañada de Arroz Coco, Tostadas de Platano o Papas a la Francesa para 5 Personas x $135.000",imagen:"images/Cazuela.jpg"}],n=[],a=function(e){return'\n          <div class="col-md-3 productoTam">\n            <div class="card">\n              <img src="'.concat(e.imagen,'" class="card-img-top"/>\n              <div class="card-body">\n                <h5 class="card-title">').concat(e.nombre,'</h5>\n                <p class="card-text">Precio: $').concat(e.precio,'</p>\n                <div id="detalle-').concat(e.id,'" class="detalle" style="display: none;">\n                  <p>Detalle del Producto: ').concat(e.detalle,'</p>\n                </div>\n                <button id="btn-catalogo-').concat(e.id,'" class="btn btn-success">Agregar</button>\n                <button id="btn-detalle-').concat(e.id,'" class="btn btn-info">Detalles</button>\n              </div>\n            </div>\n          </div>')},o=function(e){return'\n          <div class="col">\n            <div class="card">\n              <img src="'.concat(e.imagen,'" class="card-img-top"/>\n              <div class="card-body">\n                <h5 class="card-title">').concat(e.nombre,'</h5>\n                <p class="card-text">Precio: $').concat(e.precio,'</p>\n                <p class="card-text">Cantidad: ').concat(e.cantidad,'</p>\n                <div class="d-flex justify-content-between">\n                  <button id="btn-disminuir-').concat(e.idCompra,'" class="btn btn-secondary btn-sm">-</button>\n                  <button id="btn-aumentar-').concat(e.idCompra,'" class="btn btn-secondary btn-sm">+</button>\n                  <button id="btn-carrito-').concat(e.idCompra,'" class="btn btn-danger btn-sm">Quitar</button>\n                </div>\n              </div>\n            </div>\n          </div>')},t=function(){var e=document.getElementById("carrito");if(e){e.innerHTML="";for(var a=0,t=0,d=n;t<d.length;t++){var c=d[t],r=o(c);e.innerHTML+=r,a+=c.precio*c.cantidad}e.innerHTML+='\n          <p class="total-carrito">Total: $'.concat(a,"</p>\n        "),e.innerHTML+='\n        <button id="btnEnviarWhatsApp" class="btn btn-success mt-3 whatsapp-button">Enviar por WhatsApp</button>\n         ';var i=document.getElementById("btnEnviarWhatsApp");i&&i.addEventListener("click",m);var s=document.getElementById("contenedorCarrito");s?s.style.display="block":console.error("El contenedor del carrito no se encuentra en el DOM."),l()}else console.error("El contenedor del carrito no se encuentra en el DOM.")},d=document.getElementById("btnMostrarCarrito");d?d.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation();var n=document.getElementById("contenedorCarrito");"none"===n.style.display||""===n.style.display?(n.style.display="block",console.log("Carrito mostrado, display: block"),t()):(n.style.display="none",console.log("Carrito ocultado, display: none"))})):console.error("El botón para mostrar el carrito no se encuentra en el DOM."),document.addEventListener("click",(function(e){var n=document.getElementById("contenedorCarrito");n&&!n.contains(e.target)&&e.target!==d&&"block"===n.style.display&&(n.style.display="none",console.log("Clic fuera del carrito, ocultando el carrito."))}));var c,r=function(){for(var a=function(){var e=d[o],a="btn-catalogo-".concat(e.id),c="btn-detalle-".concat(e.id),r=document.getElementById(a),l=document.getElementById(c);r&&r.addEventListener("click",(function(){var a=n.find((function(n){return n.idCompra===e.id}));if(a)a.cantidad++;else{var o={nombre:e.nombre,idCompra:e.id,precio:e.precio,imagen:e.imagen,cantidad:1};n.push(o)}t()})),l&&l.addEventListener("click",(function(){var n=document.getElementById("detalle-".concat(e.id));n?n.style.display="none"===n.style.display?"block":"none":console.error("No se encontró el detalle del producto con id: ".concat(e.id))}))},o=0,d=e;o<d.length;o++)a()};(c=document.getElementById("catalogo")).innerHTML="",e.forEach((function(e){c.innerHTML+=a(e)})),r();var l=function(){n.forEach((function(e){var a="btn-carrito-".concat(e.idCompra),o=document.getElementById(a),d="btn-aumentar-".concat(e.idCompra),c=document.getElementById(d),r="btn-disminuir-".concat(e.idCompra),l=document.getElementById(r);o?o.addEventListener("click",(function(a){a.stopPropagation();var o=n.findIndex((function(n){return n.idCompra===e.idCompra}));-1!==o&&(n.splice(o,1),t())})):console.error("Botón de eliminar con ID ".concat(a," no encontrado")),c?c.addEventListener("click",(function(n){n.stopPropagation(),e.cantidad+=1,t()})):console.error("Botón de aumentar con ID ".concat(d," no encontrado")),l?l.addEventListener("click",(function(a){if(a.stopPropagation(),e.cantidad>1)e.cantidad-=1;else{var o=n.findIndex((function(n){return n.idCompra===e.idCompra}));-1!==o&&n.splice(o,1)}t()})):console.error("Botón de disminuir con ID ".concat(r," no encontrado"))}))};window.toggleVisibility=function(e){var n=document.getElementById(e);"none"===n.style.display?n.style.display="block":n.style.display="none"};var i=document.getElementById("panelBusqueda"),s=document.getElementById("inputBusqueda");function m(){var e="Hola! Quiero realizar un pedido:\n";n.forEach((function(n){e+="- ".concat(n.nombre," (Cantidad: ").concat(n.cantidad,")\n")}));var a="https://wa.me/".concat("573177505231","?text=").concat(encodeURIComponent(e));window.open(a,"_blank")}s.addEventListener("input",(function(){var n,a=s.value.toLowerCase();!function(e){i.innerHTML="",e.forEach((function(e){var n=document.createElement("div");n.classList.add("card"),n.innerHTML='\n        <img src="'.concat(e.imagen,'" class="card-img-top" alt="').concat(e.nombre,'">\n        <div class="card-body">\n          <h5 class="card-title">').concat(e.nombre,'</h5>\n          <p class="card-text">Precio: ').concat(e.precio,'</p>\n          <p class="card-text">').concat(e.detalle,"</p>\n        </div>\n      "),i.appendChild(n)})),i.style.display="block"}((n=a,e.filter((function(e){return e.nombre.toLowerCase().includes(n)}))))})),document.addEventListener("click",(function(e){i.contains(e.target)||e.target===s||(i.style.display="none")})),document.getElementById("botonWhatsAppCarrito").addEventListener("click",m),document.getElementById("whatsappButton").addEventListener("click",m),function(){var n=document.getElementById("catalogo");n.innerHTML="";for(var o=0,t=e;o<t.length;o++){var d=t[o],c=a(d);n.innerHTML+=c}r()}(),console.log(a(e[0])),function(e){var n,a;function o(o){var t=o.clientX-n,d=o.clientY-a;e.style.left=t+"px",e.style.top=d+"px"}function t(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",t)}e.addEventListener("mousedown",(function(d){n=d.clientX-e.getBoundingClientRect().left,a=d.clientY-e.getBoundingClientRect().top,document.addEventListener("mousemove",o),document.addEventListener("mouseup",t)}))}(document.getElementById("resultadoBusqueda")),document.addEventListener("click",(function(a){for(var o=0,t=e;o<t.length;o++){var d=t[o],c=document.getElementById("detalle-".concat(d.id));"block"!==c.style.display||c.contains(a.target)||(c.style.display="none")}for(var r=0,l=n;r<l.length;r++){var i=l[r],s=document.getElementById("detalle-".concat(i.id));"block"!==s.style.display||s.contains(a.target)||(s.style.display="none")}}))}))})();