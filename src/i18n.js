import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {
    en: {
      message: "For sale",
      transaction: "For sale",

      transactions: [
        { id: 1, name: "For sale" },
        { id: 2, name: "For rent" },
        { id: 3, name: "Life annuity sale" },
      ],
      categories: [
        { id: 1, name: "House" },
        { id: 2, name: "Flat" },
        { id: 3, name: "Plot" },
        { id: 4, name: "Office" },
        { id: 5, name: "Commercial" },
        { id: 6, name: "Industrial" },
        { id: 7, name: "Garage / Parking" },
      ],
    },
  };
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
  silentTranslationWarn: process.env.NODE_ENV === "production",
});
