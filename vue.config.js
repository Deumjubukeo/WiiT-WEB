const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 5053 
  },
  transpileDependencies: [
    'vuetify'
  ]
})
