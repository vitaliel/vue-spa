const path = require('path')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')

const config = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/server-entry'),
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server/main.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: [/\.s?css$/]
  })
})

module.exports = config
