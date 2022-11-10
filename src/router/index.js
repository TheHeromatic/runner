import Vue from 'vue'
import Router from 'vue-router'
import App from './../App'
import GameScreen from './../components/GameScreen'

Vue.use(Router)
Vue.use
export default new Router({
    routes: [
        { path: '/', component: App },
        { path: '/game', component: GameScreen },
    ]
})