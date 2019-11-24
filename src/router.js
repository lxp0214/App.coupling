import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/pages/Login.vue';
import Home from './components/pages/Home.vue';
import Publish from './components/pages/Publish.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      keepAlive: true
    }  
  },
  { 
    path: '/login',
    component: Login 
  },
  { 
    path: '/publish', 
    component: Publish 
  }
]

const router = new VueRouter({
  routes
})


export default router;