const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const path = require('path');
const webpack = require('webpack');

module.exports={
  entry: {
    prueba: './src/prueba.mjs',
    auth: './src/firebase-auth.mjs',
    // Agrega otras entradas según sea necesario
  },
  output: {
    filename: './[name].mjs',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.mjs','.json','.cjs'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /firebaseui/,
        use: 'script-loader'
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [

        { from: 'src/index.html', to: 'index.html' },
        { from: path.resolve(__dirname, 'src/firebase-config.mjs'), to: 'firebase-config.mjs' }, // Agrega esta línea
        { from: 'src/css.css', to: 'css' },
        { from: 'src/images', to: 'images' },
        { from: '.github/workflows', to: '.github/workflows' },
      ],
    }),
  ],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
