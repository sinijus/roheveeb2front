<template>
  <nav>
    <template v-if="isLoggedIn" >
    <router-link to="/shop" >E-pood</router-link>
    <router-link to="/about">Kontakt</router-link>
    </template>
  </nav>
  <div>


  </div>

  <router-view @event-update-nav-menu="updateNavMenu()" :is-company="isCompany" :is-admin="isAdmin"/>
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
  margin-left: 10px;


}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

import {ADMIN, COMPANY} from "@/assets/script/role";

export default {

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      isCompany: false
    }
  },
  methods: {
    updateNavMenu() {
      this.isLoggedIn = sessionStorage.getItem('userId') !== null
      this.isAdmin = sessionStorage.getItem('roleName') === ADMIN
      this.isCompany = sessionStorage.getItem('roleName') === COMPANY
    },

  },
  beforeMount() {
    this.updateNavMenu()
  }

}

</script>