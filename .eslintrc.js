module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // "no-unused-vars": 0
    // "no-restricted-imports": ["error", {
    //   "paths": ["lodash"],
    //   "patterns": ["import/lodash/*"],
    // }]
  },
  globals: {}
}
