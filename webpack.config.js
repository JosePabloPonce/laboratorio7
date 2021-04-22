const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
<html>
<body>
<div id="root"></div>
<script src="./main.js"></script>
</body>
</html>

  `,
  })],

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader?name=[name].[ext]&outputPath=imagenes/'
        ,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    contentBase: './dist',
  },

}
