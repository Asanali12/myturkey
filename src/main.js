import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCarousel from 'vue-carousel';
import VueScreenSize from 'vue-screen-size';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueYouTubeEmbed)
Vue.use(VueCarousel)
Vue.use(VueScreenSize)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
