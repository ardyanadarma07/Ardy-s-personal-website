import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import { supabase } from '@/supabase'

import LoginAdmin from '../views/admin/LoginAdmin.vue'
import DashboardAdmin from '../views/admin/DashboardAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAdmin,
      meta: { requiresGuest: true },
    },
    {
      path: '/admin',
      name: 'admin',
      component: DashboardAdmin,
      meta: { requiresAuth: true },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(async (to, from, next) => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isProtected = to.matched.some((record) => record.meta.requiresAuth)
  const isGuestOnly = to.matched.some((record) => record.meta.requiresGuest)

  if (isProtected && !session) {
    next({ name: 'login' })
  } else if (isGuestOnly && session) {
    next({ name: 'admin' })
  } else {
    next()
  }
})

export default router
