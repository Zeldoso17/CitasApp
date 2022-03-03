<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
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
.crear{
    color: #fff;
    font-size: 15px;
    margin-left: 40px;
    text-decoration: none;
}
</style>