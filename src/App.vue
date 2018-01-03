<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import '../static/iconfont/iconfont.css'
  export default {
    name: 'app'
  }
</script>

<style>
html,body{
  height: 100%;
  font-size: .16rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
