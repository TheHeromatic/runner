import { createRouter, createWebHashHistory } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import GameScreen from '../components/GameScreen.vue'
import SettingsScreen from '../components/SettingsScreen'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen
  },
  {
    path: '/gameScreen',
    name: '/gameScreen',
    component: GameScreen
  },
  {
    path: '/settingsScreen',
    name: '/settingsScreen',
    component: SettingsScreen
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
