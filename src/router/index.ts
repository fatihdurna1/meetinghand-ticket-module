import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import TicketFlow from '@/pages/TicketFlow.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ticket-flow', name: 'TicketFlow', component: TicketFlow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
