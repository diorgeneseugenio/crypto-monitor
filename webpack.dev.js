const HtmlWebPackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#003a8c' /* blue-9 */,
                  'btn-primary-bg': '@orange-6'
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      }]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './template.dev.html'
    })
  ]
})
