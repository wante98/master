<template>
  <div id="app">
    <Row>{{ '\u00A0' }}</Row>
    <nav>
      <router-link to="/" class="navbars">Home</router-link> |
      <router-link to="/Photos" class="navbars">Photos</router-link> |
      <router-link to="/Venue" class="navbars">Venue</router-link>
    </nav>
    <router-view/>
    
  </div>
</template>
<script>

export default {
  name: 'app'
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
.navbars{
  font-family: Overpass;
    letter-spacing: 1px;
    color: #414042;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 2px solid transparent;
    display:inline ;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0 auto;
    padding: 8px 8px 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}


body {
  background-color: #f4f4f5;
}
</style>
