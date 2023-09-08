<template>
  <nav v-if="true">
    <router-link to="/shop">Avaleht</router-link> |
    <router-link to="/shop">E-pood</router-link> |
    <router-link to="/shop">Kontakt</router-link>
  </nav>
  <router-view @emit-event-update-nav-menu="updateNavMenu"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>