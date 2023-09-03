import Vue from "vue";
import App from "./App.vue";

// import axiosPlugin from "./plugins/axios.js";

// Vue.config.productionTip = false;
// Vue.use(axiosPlugin);

// const BASE_URL = "https://jsonplaceholder.typicode.com";
// Vue.use({
//   install(Vue) {
//     Vue.baseUrl = BASE_URL;
//     Vue.prototype.baseUrl = BASE_URL;
//   },
// });
import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
