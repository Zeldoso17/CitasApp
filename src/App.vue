<template>
  <div>
    <NavBar />
    <div class="contenedor">
      <router-view />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
    },
}
</script>

<style scoped>
.contenedor{
  min-height: 917px;
}
</style>
