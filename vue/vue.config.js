
const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const path = require('path'); 
module.exports = {

  configureWebpack: {
   resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      AutoImport.default({
        resolvers: [VantResolver()],
      }),
      Components.default({ resolvers: [VantResolver()] }),
      new (require('webpack')).DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
      })
    ],
  },
};
