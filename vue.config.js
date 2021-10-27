const path = require("path");
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/pixart.eu/",
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    },

    configureWebpack: {
      resolve: {
        extensions: [".js", ".vue", ".json"],
        "@": path.resolve("src")
      },
      externals: {
        vue: "Vue"
      }
    }
  }
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // }
};
