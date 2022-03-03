<template>
    <div class="contenedor">
        <div class="contenedor-form">
            <h1>Iniciar Sesión</h1>
            <form @submit.prevent="">
                <label style="margin-left: 40px;" for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                <Input
                    tipo="text" 
                    placeholder="Ingresa tu nombre de usuario"
                    v-model.trim="username"
                />
                <br>
                <label style="margin-left: 40px;" for="exampleInputEmail1" class="form-label">Contraseña</label>
                <Input
                    tipo="password" 
                    placeholder="Ingresa tu contraseña"
                    v-model.trim="password"
                />
                <br>
                <Boton
                    type="submit" 
                    value="Iniciar Sesión" 
                    :disabled="bloquear"
                />
                <router-link class="crear" to="RegistroUsuario">Crear Cuenta</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import Input from '../components/Input.vue' 
import Boton from '../components/Boton.vue'

import {mapActions} from 'vuex'

export default {
    components: {
        Input,
        Boton
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        bloquear() {
            if(this.username.length > 5 && this.password.length > 8){
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions('usuarios', ['Login'])
        
    },
}
</script>

<style lang="css" scoped>
.contenedor{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: url('../assets/wallpaper.jpg');
    background-position: center;
}
.contenedor-form{
    width: 25vw;
    height: 50vh;
    background: gray;
}

.contenedor-form h1{
    margin: 60px;
    margin-left: 120px;
}

label{
    font-size: 20px;
}

.crear{
    color: #fff;
    font-size: 15px;
    margin-left: 40px;
    text-decoration: none;
}
</style>