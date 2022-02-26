import { createStore } from 'vuex'

import usuarios from '../modules/usuarios'
import citas from '../modules/citas'
import tareas from '../modules/tareas'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usuarios,
    citas,
    tareas
  }
})
