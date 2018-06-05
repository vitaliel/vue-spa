module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standart',
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
