import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import RegistroUsuario from '../views/Registro'
import Inicio from '../views/Inicio'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
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
