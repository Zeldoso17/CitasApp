import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import RegistroUsuario from '../views/Registro'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/RegistroUsuario',
    name: 'RegistroUsuario',
    component: RegistroUsuario
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
