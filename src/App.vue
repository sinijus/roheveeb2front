<template>

  <nav>
    <template v-if="isLoggedIn">
      <router-link to="/shop">E-pood</router-link>
      <router-link to="/about">Kontakt</router-link>
      <font-awesome-icon :icon="['fas', 'cart-shopping']" style="margin-right: 10px;" @click="goToCart" type="button"
                         size="xl"/>
      {{ orderInfo.numberOfProducts }}

      <font-awesome-icon :icon="['fas', 'user']" size="xl" @click="goToProfile" type="button"
                         style="margin-right: 10px;"/>
      <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" size="xl" @click="logOut" type="button"/>
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
import router from "@/router";

export default {

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      isCompany: false,
      orderInfo: {
        orderId: 0,
        numberOfProducts: 0
      },
    }
  },
  methods: {
    updateNavMenu() {
      this.isLoggedIn = sessionStorage.getItem('userId') !== null
      this.isAdmin = sessionStorage.getItem('roleName') === ADMIN
      this.isCompany = sessionStorage.getItem('roleName') === COMPANY
      if (this.isLoggedIn) {
        this.getPendingOrderInfo();
      }

    },

    goToCart() {
      router.push({name: 'cartRoute'})
    },

    goToProfile() {
      let roleName = sessionStorage.getItem('roleName');

      if (roleName === 'company') {
        router.push({name: 'profileCompanyRoute'});
      } else {
        router.push({name: 'profileCustomerRoute'})
      }
    },

    logOut() {
      sessionStorage.clear()
      this.isLoggedIn = false
      this.isAdmin = false
      this.isCompany = false
      router.push({name: 'homeRoute'})
    },

    getPendingOrderInfo() {
      this.$http.get("/order/pending", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        sessionStorage.setItem('orderId', this.orderInfo.orderId)
        //alert('number of products: ' + this.orderInfo.numberOfProducts)
      }).catch(error => {
        alert('getPendingOrderId Error')
      })
    },
  },
  beforeMount() {
    this.updateNavMenu()
  }

}

</script>