const { environment } = require('@rails/webpacker')

const babelLoader = environment.loaders.get('babel')
babelLoader.use.push({
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-react']
  }
})

module.exports = environment
