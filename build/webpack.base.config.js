const path = require('path')

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {module: true}
          },
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
}

module.exports = config
