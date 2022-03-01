<template>
  <div>
    <NavBar />
    <div class="container">
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

<style>
</style>
