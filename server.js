const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
let renderer

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), "utf-8")
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

require('./build/dev-server')(app, bundle => {
  console.log('bundle', bundle)
  renderer = createBundleRenderer(bundle)
})

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()

  // renderer.renderToString({ url: req.url }, (err, html) => {
  //   if (err) {
  //     return res.status(500).send('Server Error')
  //   }

  //   console.log(html)
  // })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
