const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main-bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [new CleanWebpackPlugin(), new Dotenv()]
}
