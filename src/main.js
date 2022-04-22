import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCarousel from 'vue-carousel';
import VueScreenSize from 'vue-screen-size';
import Home from './components/MainPage.vue'
import ThanksPage from './components/ThanksPage.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueYouTubeEmbed)
Vue.use(VueCarousel)
Vue.use(VueScreenSize)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/thanks', component: ThanksPage }
]


const router = new VueRouter({
  routes,
  mode: "history"
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
