const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')

module.exports = function setupDevServer(app) {
  clientConfig.entry.app = [
  'webpack-hot-middleware/client',
  clientConfig.entry.app
  ]
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig)

  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  )
  app.use(require('webpack-hot-middleware')(clientCompiler))

  // in dev mode we will use hot reloading for css
  app.get('/assets/app.css', (req, res) => {
    res.write('')
    res.end()
  })
}
