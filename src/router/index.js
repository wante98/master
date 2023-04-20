import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Venue from '../views/Venue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/Venue',
    name: 'Venue',
    component: Venue
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
