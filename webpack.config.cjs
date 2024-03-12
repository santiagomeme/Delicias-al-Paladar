const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
  entry: './src/prueba.mjs',
  output: {
    filename: './public/prueba.mjs',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  module: {
    rules: [
      // ... (tus reglas existentes)
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'public/images' },
        { from: '.github/workflows', to: 'public/.github/workflows' },
        { from: path.resolve(__dirname, 'src/css'), to: 'css' },
        { from: 'src/index.html', to: 'index.html' },


        // Puedes agregar más reglas para otras carpetas o archivos
      ],
    }),
  ],
  mode: 'development',

};
