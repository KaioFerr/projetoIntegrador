const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const path = require('path')

// copia src/public (manifesto e ícones do app) para a raiz do dist, sem renomear
class CopyPublicPlugin {
  apply(compiler) {
    const dir = path.join(__dirname, 'src/public')
    compiler.hooks.emit.tap('CopyPublicPlugin', compilation => {
      fs.readdirSync(dir).forEach(name => {
        const file = path.join(dir, name)
        const data = fs.readFileSync(file)
        compilation.assets[name] = { source: () => data, size: () => data.length }
        compilation.fileDependencies.add(file)
      })
    })
  }
}

module.exports = {
  mode: 'development',
  entry: './src/js/canvas.js',
  output: {
    path: __dirname + '/dist/',
    filename: './js/canvas.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false
    }),
    new CopyPublicPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html'
    })
  ],
  watch: true,
  devtool: 'source-map'
}
