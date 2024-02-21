//"use strict";


const express = require('express');
const path = require('path');
const functions = require('firebase-functions');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors({
  origin: 'https://delicias-al-paladar-689f1.web.app', // Reemplaza con tu dominio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar solicitudes a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
exports.app = functions.https.onRequest(app);
// Middleware CORS
app.use(cors());


