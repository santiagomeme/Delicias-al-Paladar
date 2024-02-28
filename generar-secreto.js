const passwordGenerator = require('password-generator');

// Generar una contraseña con una longitud específica
const password = passwordGenerator(12, false);

console.log(password);
