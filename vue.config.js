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
};
