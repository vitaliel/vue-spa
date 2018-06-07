const path = require('path')
const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  optimization: Object.assign({}, base.optimization, {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, '../node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  }),

  plugins: base.plugins || []
})

console.log(config)

module.exports = config
