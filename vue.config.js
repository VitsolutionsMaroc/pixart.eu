module.exports = {
  lintOnSave: false,
  publicPath: "/pixart.eu/",

  publicPath: process.env.NODE_ENV === 'production'
    ? '/pixart.eu/'
    : '/'
  ,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
