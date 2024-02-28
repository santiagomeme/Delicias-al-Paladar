const path = require('path');

module.exports = {
  entry: './src/prueba.js',
  output: {
    filename: 'prueba.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'public'), // Carpeta de salida
  },
   devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
  },
};
