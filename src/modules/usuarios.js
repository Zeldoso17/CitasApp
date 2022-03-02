export default {
    namespaced: true,
    state: {
        users: [],
        user: null,
        token: String
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        }
    },
    actions: {
        Login({commit}, usuario){
            commit('setUser', usuario.username)
            alert('Inicio de sesión')
        }
    },
    getters: {
        usuarioAutenticado(state){
            return !!state.user
        }
    }
}