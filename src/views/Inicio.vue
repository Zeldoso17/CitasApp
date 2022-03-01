<template>
  <div class="home">
    <h1>INICIO</h1>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Inicio',
  components: {
    
  },
  computed: {
    ...mapState('usuarios', ['user'])
  },
}
</script>
