import { createRouter, createWebHistory } from 'vue-router'
import Recepies from '../pages/Recepies.vue'
import Warehouse from '../pages/Warehouse.vue'
import Calendar from '../pages/Calendar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Recepies', component: Recepies },
    { path: '/warehouse', name: 'Warehouse', component: Warehouse },
    { path: '/calendar', name: 'Calendar', component: Calendar }
]
})

export default router