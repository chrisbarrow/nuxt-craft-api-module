const { resolve } = require('path')

module.exports = function(moduleOptions) {
  const options = {
    ...this.options.craftApi,
    ...moduleOptions
  }

  // expose the namespace / set a default
  if (!options.namespace) {
    options.namespace = 'craftApi'
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: `${options.namespace}.js`,
    options
  })
}

module.exports.meta = require('./package.json')
