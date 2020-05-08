import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home= ()=>import('../views/Home.vue')
const Insert=()=>import('../views/Insert.vue')

  const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/insert',
    component:Insert
  },
  {
    path:"/home",
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
