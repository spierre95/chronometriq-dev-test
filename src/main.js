// import package//
import Vue from "vue";
import App from "./App";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { Server } from "miragejs";
import staffData from "./data/staff";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//mock server for get request
new Server({
  routes() {
    this.namespace = "/api";
    this.get("/staff", () => staffData);
  },
});

Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  render: (h) => h(App),
});
