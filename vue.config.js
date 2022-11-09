const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('style', resolve('src/style'))
      .set('components', resolve('src/components'))
  }
}
