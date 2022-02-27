<template>
    <div class="container">
        <div class="container-form">
            <h1>Iniciar Sesión</h1>
            <form @submit.prevent="">
            <Input 
                tipo="text" 
                placeholder="Ingresa tu usuario"
                v-model="username"
            />
            <Input 
                tipo="password" 
                placeholder="Ingresa tu contraseña"
                v-model="password"
            />
            <Boton value="Iniciar Sesión"/>
        </form>
        </div>
    </div>
</template>

<script>
import Input from '../components/Input.vue' 
import Boton from '../components/Boton.vue'
export default {
    components: {
        Input,
        Boton
    },
    data() {
        return {
            username: '',
            password: ''
        };
    }, 
}
</script>

<style lang="css" scoped>
.container{
    background: green;
}
</style>