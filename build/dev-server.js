const path = require('path')
const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const MFS = require('memory-fs')

module.exports = function setupDevServer(app, onUpdate) {
  clientConfig.entry.app = [
  'webpack-hot-middleware/client',
  clientConfig.entry.app
  ]
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  const clientCompiler = webpack([clientConfig])

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

  // clientCompiler.watch({}, () => {
  //   console.log('server watch')
  // })

  // const serverCompiler = webpack(serverConfig)
  // const mfs = new MFS()
  // const outputPath = path.join(serverConfig.output.path, 'server/main.js')
  // console.log('out path', outputPath)
  // serverCompiler.outputFilesystem = mfs
  // serverCompiler.watch({}, () => {
  //   console.log('server watch')
  //   mfs.exists(outputPath, (exists) => {
  //     if (exists) {
  //       onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  //     }
  //   })
  // })
}
