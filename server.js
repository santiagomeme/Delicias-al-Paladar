const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const functions = require('firebase-functions');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();


app.use(cors({
  origin: 'https://delicias-al-paladar-689f1.web.app', // Reemplaza con tu dominio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de cookies
app.use(cookieParser());
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true, // Asegúrate de que tu servidor esté configurado con HTTPS para usar secure: true
    sameSite: 'None',
  },
}));

// Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, // Tiempo de expiración en milisegundos (1 hora)
    secure: true, // Configura a true si tu aplicación utiliza HTTPS
    sameSite: 'None', // Configura a 'None' si tus cookies necesitan ser enviadas en solicitudes de sitios cruzados
  },
}));

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


