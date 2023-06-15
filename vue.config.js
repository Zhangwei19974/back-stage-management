const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: process.env.VUE_PROXY_URL,
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://localhost:9527',
        pathRewrite: {'^/api': ''}
      },
      '/google': {
        target: 'https://www.google.com',
        pathRewrite: {'^/google': ''}
      }
    }
  }
});
