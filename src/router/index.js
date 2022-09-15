import { createRouter, createWebHistory } from 'vue-router'
import masterview from '../views/masterview.vue'

const routes = [
  {
    path: '/',
    name: 'masterview',
    component: masterview
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
