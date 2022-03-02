<template>
    <div class="contenedor">
        <div class="contenedor-form">
            <h1>Registrate</h1>
            <form @submit.prevent="">
                <Input
                    tipo="text" 
                    placeholder="Ingresa tu nombre"
                    v-model.trim="nombres"
                />
                <br>
                <Input
                    tipo="text" 
                    placeholder="Ingresa tu nombre de usuario"
                    v-model.trim="username"
                />
                <br>
                <Input
                    tipo="email" 
                    placeholder="Ingresa tu correo"
                    v-model.trim="email"
                />
                <br>
                <Input
                    tipo="text" 
                    placeholder="Ingresa tu telefono"
                    v-model.trim="telefono"
                />
                <br>
                <Input
                    tipo="password" 
                    placeholder="Ingresa tu contraseña"
                    v-model.trim="password"
                />
                <br>
                <Input
                    tipo="password" 
                    placeholder="Confirma tu contraseña"
                    v-model.trim="password2"
                />
                <br>
                <Boton
                    type="submit" 
                    value="Registrarme" 
                />
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
            nombres: '',
            username: '',
            email: '',
            telefono: '',
            password: '',
            password2: '',
        }
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
    height: 75vh;
    /*margin-top: -150px;*/
    background: gray;
}

.contenedor-form h1{
    margin: 60px;
    margin-left: 150px;
}
</style>