import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/pages/Login.vue';
import Home from './components/pages/Home.vue';
import Publish from './components/pages/Publish.vue';
import Me from './components/pages/Me.vue';
import About from './components/pages/About.vue';

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
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})


export default router;