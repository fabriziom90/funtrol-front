import { createRouter, createWebHistory } from 'vue-router'
import Recepies from '../pages/Recepies.vue'
import Warehouse from '../pages/Warehouse.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Recepies', component: Recepies },
    { path: '/warehouse', name: 'Warehouse', component: Warehouse}
]
})

export default router