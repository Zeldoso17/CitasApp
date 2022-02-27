<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
               Veterinaria el Perro Feliz
            </router-link>
            <div class="d-flex">
                <router-link 
                to="/Login"
                v-if="!usuarioAutenticado" 
                class="btn btn-dark">
                    Iniciar Sesión
                </router-link>

                <router-link 
                to="/RegistroUsuario"
                v-if="!usuarioAutenticado" 
                class="btn btn-dark">
                    Registrar
                </router-link>

                <button class="btn btn-dark" v-if="usuarioAutenticado">
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('usuarios',['usuarioAutenticado'])
    },
}
</script>

<style lang="scss" scoped>

</style>