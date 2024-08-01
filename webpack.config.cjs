const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
  entry: './src/prueba.mjs',
  output: {
    filename: 'prueba.mjs',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    proxy: {
      '/register': 'http://localhost:3000',
      // Puedes añadir más rutas si es necesario
    }
  },
  resolve: {
    extensions: ['.js', '.mjs', '.cjs', '.json', '.css'],
    alias: {
   
      'firebaseui': path.resolve(__dirname, 'node_modules/firebaseui/dist/firebaseui.js')
    }
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
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      {
        test: /firebaseui/,
        use: 'script-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/politicas.html',
      filename: 'politicas.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/condicioneServicios.html',
      filename: 'condicioneServicios.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'public/images' },
        { from: '.github/workflows', to: 'public/.github/workflows' }
      
      ],
    }),
  ],
  mode: 'production',

  
};
