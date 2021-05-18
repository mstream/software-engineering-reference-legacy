function configureWebpack() {
  return {
    resolve: {
      fallback: {
        'crypto': require.resolve('crypto-browserify'),
        'stream': require.resolve('stream-browserify'),
      }
    }
  } 
}

module.exports = function() {
  return {
    name: 'plugin-crypto',
    configureWebpack,
  }
}
