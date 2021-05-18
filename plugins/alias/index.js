const path = require('path')

function configureWebpack() {
  return {
    resolve: {
      alias: {
        '@local/components': path.resolve(
          __dirname, 
         '..', 
        '..', 
        'src', 
        'components'
        ),
        '@local/diagrams': path.resolve(
          __dirname, 
         '..', 
        '..', 
        'src', 
        'diagrams'
        ),
      }
    }
  } 
}

module.exports = function() {
  return {
    name: 'plugin-alias',
    configureWebpack,
  }
}
