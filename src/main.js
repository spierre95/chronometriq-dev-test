// import package//
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSwal from 'vue-swal';
Vue.use(VueSwal);

new Vue({
    el: "#app",
    router,
    template: '<App/>',
    render: h => h(App),
});
