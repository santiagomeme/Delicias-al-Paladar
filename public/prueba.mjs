(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=[{id:1,nombre:"Gordon Blue",precio:11e3,detalle:"Gordon Blue Relleno de Jamon y Queso, Acompañadp de Ensalada, y un Acompañante",imagen:"images/cenaGordonBlue.jpg"},{id:2,nombre:"Filete de Pollo relleno ",precio:11e3,detalle:"Rellenos: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa",imagen:"images/filete-relleno.jpg"},{id:3,nombre:"Cena con Gordon Blue ",precio:11e3,detalle:"Gordon Blue Relleno de Jamon y Queso, Acompañado de Ensalada, y un Acompañante",imagen:"images/cenaGordonBlue2.jpg"},{id:4,nombre:"Cenas con Rollo de Pollo",precio:1e5,detalle:"Rollo de Pollo Relleno de: Verduras Salteadas, Hawallano, Verduras Agridulces, Maduro y Queso, Acompañados de Salsa. Acompañadp de Ensalada, y un Acompañante para 10 Personas x $100.000",imagen:"images/cenaRollo.jpg"},{id:5,nombre:"Lomo de Cerdo",precio:12e3,detalle:"Lomo de Cerdo al Horno Bañado en Salsa, Acompañado de Ensalada y 1 Acompañante",imagen:"images/cerdoSalsa.jpg"},{id:6,nombre:"Comida Rapida",precio:6e3,detalle:"Hamburguesa Tradicional $10000 , super Cronch 13000$ ,Hamburguesa Infantil $, Perros $ ,Perro Infantil $ , Snaks de Pollo $ 8000, Lasagñas $12000 , Quesadillas $8000 , Alitas $ 10000 ",imagen:"images/comidaRapida.jpg"},{id:7,nombre:"Cenas para Eventos",precio:11e3,detalle:"Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",imagen:"images/comiEventos1.jpg"},{id:8,nombre:"Chuleta de Pollo",precio:11e3,detalle:"Chuleta de Pollo Acompañada de ensalada y un Acompañante x $11.000.",imagen:"images/chuletaPollo.jpg"},{id:9,nombre:"Postres",precio:3500,detalle:"Postres de Diferentes Sabores y Mini Postres",imagen:"images/miniPostres.jpg"},{id:11,nombre:"Arroz Marinero",precio:1e5,detalle:"Arroz Marinero Compuesto de Camaron, Calamar, Pulpo, Pescado y Cangrejo,  Acompañado de Tostadas de Platano o Papas a la Francesa y Aji, para 5 Personas x $100.000",imagen:"images/ArrozMar.jpg"},{id:12,nombre:"Picada Marinera",precio:1e5,detalle:"Camaron, Calamar, Cangrejo Apanados Acompañados de Papas a la Francesa con Salsas y Ajies",imagen:"images/PicadaMarinera.jpg"},{id:13,nombre:"Cazuela de Mariscos o Camaron",precio:12e4,detalle:"Cazuela de Mariscos o Camaron Grande Acompañada de Arroz Coco, Tostadas de Platano o Papas a la Francesa para 5 Personas x $135.000",imagen:"images/Cazuela.jpg"},{id:14,nombre:"Pollo Relleno",precio:12e4,detalle:"Rellenos: Hawallano, Verduras, Agridulce. Acompañado de Ensalada y un Acompañante para 10 personas x $120.000",imagen:"images/PolloRelleno.jpg"},{id:15,nombre:"Pernil de Pollo",precio:11e3,detalle:"Pernil de Pollo al Horno en Salsa o en Verduras. Acompañado de Ensalada y un Acompañante  x $11.000",imagen:"images/PernilPollo.jpg"},{id:16,nombre:"Pechuga Rellena",precio:11e3,detalle:"Rellenos:Hawallano, Verduras, Agridulce. Queso y Espinaca. Acompañada de ensalada y un acompañante.",imagen:"images/PechugaRellena.jpg"},{id:17,nombre:"Chuleta de Pescado",precio:14500,detalle:"Chuleta de Filete de Tilapia Acompañada de Ensalada y un Acompañante x $14.500",imagen:"images/ChulePez.jpg"},{id:18,nombre:"Comida para Eventos",precio:11e3,detalle:"Cenas para Eventos con una Proteina una Ensalada, y un Acompañante, Proteinas Pollo $11.000, Cerdo $12.000, Res $13.000",imagen:"images/comiEventos2.jpg"}],a=0,n=[],o=function(e){return'\n      <div class="col-md-3" class="productoTam">\n        <div class="card">\n          <img\n          src="'.concat(e.imagen,'"\n            class="card-img-top"\n          />\n          <div class="card-body">\n            <h5 class="card-title">').concat(e.nombre,'</h5>\n            <p class="card-text">Precio:$ ').concat(e.precio,'</p>\n            <div id="detalle-').concat(e.id,'" class="detalle" style="display: none;">\n            <p>Detalle del Producto: ').concat(e.detalle,'</p></div>            \n            <button id="btn-catalogo-').concat(e.id,'" class="btn btn-success">Agregar</button>\n            <button id="btn-detalle-').concat(e.id,'" class="btn btn-info">Detalles</button>\n\n          </div>\n        </div>\n      </div>')},t=function(e){return console.log("Valor de producto.imagen:",e.imagen),'\n      <div class="col">\n        <div class="card">\n          <img src="'.concat(e.imagen,'" class="card-img-top"/>\n          <div class="card-body">\n            <h5 class="card-title">').concat(e.nombre,'</h5>\n            <div id="detalle-').concat(e.id,'" style="display: none;">\n            <p class="card-text">Precio:$ ').concat(e.precio,'</p>\n            <p class="card-text">Detalles del Producto: ').concat(e.detalle,'</p>   </div> \x3c!-- Mostrar detalle del producto --\x3e\n            <button id="btn-carrito-').concat(e.idCompra,'" class="btn btn-danger">Quitar</button>\n            <button id="btn-detalle-carrito-').concat(e.idCompra,'" class="btn btn-info">Detalles</button>\n           </div>\n        </div>\n      </div>')},l=function(){for(var e=document.getElementById("contenedorCarrito"),a=document.getElementById("carrito"),o=document.getElementById("precioTotal"),l="",d=0,i=0,r=n;i<r.length;i++){var s=r[i];l+=t(s),d+=s.precio}o.textContent=d,a.innerHTML=l,e.style.display="block",c()};document.getElementById("btnMostrarCarrito").addEventListener("click",l),document.addEventListener("click",(function(e){var a=document.getElementById("contenedorCarrito"),n=document.getElementById("btnMostrarCarrito");a.contains(e.target)||e.target===n||(a.style.display="none")})),window.toggleVisibility=function(e){var a=document.getElementById(e);"none"===a.style.display?a.style.display="block":a.style.display="none"};var d=function(){for(var o=function(){var o=d[t],c="btn-catalogo-".concat(o.id);document.getElementById(c).addEventListener("click",(function(){var e={nombre:o.nombre,idCompra:a,precio:o.precio};a+=1,n.push(e),console.log("Producto agregado al carrito:",e),l()}));var i="btn-detalle-".concat(o.id);document.getElementById(i).addEventListener("click",(function(){var a=document.getElementById("detalle-".concat(o.id)),n="block"===a.style.display;e.forEach((function(e){document.getElementById("detalle-".concat(e.id)).style.display="none"})),a.style.display=n?"none":"block",event.stopPropagation()}))},t=0,d=e;t<d.length;t++)o()},c=function(){n.forEach((function(e){var a="btn-carrito-".concat(e.idCompra);document.getElementById(a).addEventListener("click",(function(a){a.stopPropagation();var o=n.findIndex((function(a){return a.idCompra==e.idCompra}));n.splice(o,1),l()}))}))};!function(){for(var a=document.getElementById("catalogo"),n="",t=0,l=e;t<l.length;t++){var c=l[t];n+=o(c)}a.innerHTML=n,d()}(),console.log(o(e[0]));var i=document.getElementById("panelBusqueda"),r=document.getElementById("inputBusqueda");r.addEventListener("input",(function(){var a,n=r.value.toLowerCase();!function(e){i.innerHTML="",e.forEach((function(e){var a=document.createElement("div");a.classList.add("card"),a.innerHTML='\n      <img src="'.concat(e.imagen,'" class="card-img-top" alt="').concat(e.nombre,'">\n      <div class="card-body">\n        <h5 class="card-title">').concat(e.nombre,'</h5>\n        <p class="card-text">Precio: ').concat(e.precio,'</p>\n        <p class="card-text">').concat(e.detalle,"</p>\n      </div>\n    "),i.appendChild(a)})),i.style.display="block"}((a=n,e.filter((function(e){return e.nombre.toLowerCase().includes(a)}))))})),document.addEventListener("click",(function(e){i.contains(e.target)||e.target===r||(i.style.display="none")})),function(e){var a,n;function o(o){var t=o.clientX-a,l=o.clientY-n;e.style.left=t+"px",e.style.top=l+"px"}function t(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",t)}e.addEventListener("mousedown",(function(l){a=l.clientX-e.getBoundingClientRect().left,n=l.clientY-e.getBoundingClientRect().top,document.addEventListener("mousemove",o),document.addEventListener("mouseup",t)}))}(document.getElementById("resultadoBusqueda")),document.addEventListener("click",(function(a){for(var o=0,t=e;o<t.length;o++){var l=t[o],d=document.getElementById("detalle-".concat(l.id));"block"!==d.style.display||d.contains(a.target)||(d.style.display="none")}for(var c=0,i=n;c<i.length;c++){var r=i[c],s=document.getElementById("detalle-".concat(r.id));"block"!==s.style.display||s.contains(a.target)||(s.style.display="none")}})),document.getElementById("toggleTopPanel").addEventListener("click",(function(){var e=document.getElementById("top-panel");"none"===e.style.display?e.style.display="block":e.style.display="none"}));var s,m,u=document.getElementById("mostrarRegistro"),p=document.getElementById("registroBox"),g=document.getElementById("mostrarRegistroButton");function y(e){var a=e.clientX-s,n=e.clientY-m;p.style.left=a+"px",p.style.top=n+"px"}function v(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",v)}u&&u.addEventListener("click",(function(){var e=window.getComputedStyle(p);"none"===e.display||"block"===e.display?p.style.display="flex":p.style.display="none"})),g&&p&&g.addEventListener("click",(function(e){e.stopPropagation();var a=window.getComputedStyle(p);"none"===a.display||"block"===a.display?p.style.display="flex":p.style.display="none"})),document.addEventListener("click",(function(e){p.contains(e.target)||e.target===g||(p.style.display="none")})),(p=document.querySelector(".registro-box")).addEventListener("mousedown",(function(e){s=e.clientX-p.getBoundingClientRect().left,m=e.clientY-p.getBoundingClientRect().top,document.addEventListener("mousemove",y),document.addEventListener("mouseup",v)})),document.getElementById("whatsappButton").addEventListener("click",(function(){window.open("https://api.whatsapp.com/send?phone=573177505231","_blank"),setTimeout((function(){document.hasFocus()||(window.location.href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=es&gl=US")}),1e3)}))}))})();