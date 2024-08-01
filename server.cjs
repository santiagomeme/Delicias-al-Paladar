const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Middleware para analizar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Conexión a la base de datos
const db = new sqlite3.Database('delicias_registro.db');

// Crear la tabla de usuarios si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Tabla usuarios creada/verificada con éxito.');
  }
});

// Ruta para el registro de usuarios
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Validar que el email y la contraseña estén presentes
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Correo y contraseña son requeridos.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el usuario en la base de datos
    db.run('INSERT INTO usuarios (email, password) VALUES (?, ?)', [email, hashedPassword], function(err) {
      if (err) {
        console.error(err.message);
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ success: false, message: 'El correo ya está registrado.' });
        }
        return res.status(500).json({ success: false, message: 'Error al registrar el usuario.' });
      }
      res.status(200).json({ success: true, message: 'Usuario registrado con éxito.' });
    });
  } catch (error) {
    console.error('Error al cifrar la contraseña:', error.message);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
