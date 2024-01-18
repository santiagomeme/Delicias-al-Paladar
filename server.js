"use strict";


const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para manejar solicitudes a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Resto de tu código actual
// ...

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
