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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.links{
  margin-right: 20px;
}

.links .login{
  margin-right: 20px;
}

#nav a {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
</style>
