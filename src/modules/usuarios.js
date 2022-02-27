import { PatchFlagNames } from "@vue/shared"

export default {
    namespaced: true,
    state: {
        users: [],
        user: null,
        token: String
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        usuarioAutenticado(state){
            return !!state.user
        }
    }
}