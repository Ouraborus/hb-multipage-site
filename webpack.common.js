const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
            // Emit errors instead of warnings (default = false)
          error: false,
            // enable snazzy output (default = true)
          snazzy: true
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader'}
        ]}
    ]},
  plugins: [
    new StyleLintPlugin({}),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new HtmlWebpackPlugin({
      title: 'production'
    })
  ]
}

module.exports = config
