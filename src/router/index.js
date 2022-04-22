import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/MainPage.vue'
import ThanksPage from '../components/ThanksPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thanks',
    name: 'ThanksPage',
    component: ThanksPage
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router