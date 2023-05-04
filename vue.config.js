const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://localhost:9527',
        pathRewrite: {'^/api': ''}
      }
    }
  }
});
