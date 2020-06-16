<template>
  <div id="app">
    <navbar></navbar>
    
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  components:{
    navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.form-control{
  height: calc(1.5em + 1.75rem + 30px);
  width: 400px;
  border-radius: 1.25rem;
  background-color: transparent;
  color: gray;
}
</style>
