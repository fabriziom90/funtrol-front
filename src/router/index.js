import { createRouter, createWebHistory } from 'vue-router'
import Recepies from '../pages/Recepies.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Recepies', component: Recepies },
  ]
})

export default router