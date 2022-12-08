import { createRouter, createWebHashHistory } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import GameScreen from '../components/GameScreen.vue'
import SettingsScreen from '../components/SettingsScreen.vue'
import SettingsScreenDark from '../components/SettingsScreenDark.vue'

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
  {
    path: '/settingsScreenDark',
    name: '/settingsScreenDark',
    component: SettingsScreenDark
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
