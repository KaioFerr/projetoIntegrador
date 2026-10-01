// Build único (sem servidor e sem watch): npm run build
const config = require('./webpack.config.js')

module.exports = {
  ...config,
  watch: false,
  plugins: config.plugins.filter(plugin => plugin.constructor.name !== 'BrowserSyncPlugin')
}
