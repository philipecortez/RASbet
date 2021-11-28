import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Sports from '../pages/Sports.vue'
import Sport from '../pages/Sport.vue'
import GameList from '../components/GameList.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/sport/:id',
    component: Sport,
    children: [
        {
            path: 'list',
            component: GameList
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router