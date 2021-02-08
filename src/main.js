import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/main.css";
import * as VueGoogleMaps from "vue2-google-maps";
import Eagle from "eagle.js";
import VModal from "vue-js-modal";
import i18n from "./i18n";

// import animate.css for slide transition
import "animate.css";

Vue.use(Eagle);
Vue.use(VModal, { componentName: "v-modal" });

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCOXpG6-_Mpzz1wJYPcUysyrRJFr4YezQw",
    libraries: "places", // This is required if you use the Autocomplete plugin
  },
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

const iconOpen = document.querySelector("#iconOpen");
const menu = document.querySelector("#menu");

iconOpen.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
