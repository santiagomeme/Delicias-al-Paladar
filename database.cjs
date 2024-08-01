const sqlite3 = require('sqlite3').verbose();  // Usar verbose para obtener más información de depuración
const db = new sqlite3.Database('delicias_registro.db');

db.serialize(() => {
  // Eliminar la tabla existente si quieres empezar de cero
  db.run("DROP TABLE IF EXISTS usuarios", (err) => {
    if (err) {
      console.error("Error al eliminar la tabla de usuarios:", err.message);
    } else {
      console.log("Tabla de usuarios eliminada con éxito.");
    }
  });

  // Crear una nueva tabla con solo los campos email y password
  db.run(`
    CREATE TABLE usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error("Error al crear la tabla de usuarios:", err.message);
    } else {
      console.log("Tabla de usuarios creada con éxito.");
    }
  });

  // Insertar un usuario de ejemplo
  db.run("INSERT INTO usuarios (email, password) VALUES (?, ?)", ['juan.perez@example.com', 'examplePassword'], (err) => {
    if (err) {
      console.error("Error al insertar el usuario:", err.message);
    } else {
      console.log("Usuario de ejemplo insertado con éxito.");
    }
  });

  // Seleccionar y mostrar todos los usuarios
  db.each("SELECT id, email, password FROM usuarios", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`${row.id}: ${row.email} - ${row.password}`);
  });
});

// Cerrar la conexión con la base de datos
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexión con la base de datos cerrada.');
});
