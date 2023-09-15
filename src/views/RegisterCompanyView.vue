<template>
  <div class="RegisterCompany">
    <div class="container text-center">

      <div class="row">
        <div class="col">
          <h1>Registreeri müüjaks</h1>
        </div>
      </div>

      <div class="row">
        <div class="col col-6">
          <input v-model="username" type="email" class="form-control" id="username" placeholder="Email">
        </div>
        <div class="col">
        </div>
      </div>

      <div class="row">
        <div class="col col-3">
          <input v-model="password" type="password" class="form-control" placeholder="Parool">
        </div>
        <div class="col col-3">
          <input v-model="password" type="password" class="form-control" placeholder="Parool uuesti">
        </div>
      </div>
      <div class="row">
        <div class="col col-3">
          <input v-model="text" type="text" class="form-control" placeholder="Eesnimi">
        </div>
        <div class="col col-3">
          <input v-model="text" type="text" class="form-control" placeholder="Perekonnanimi">
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <input v-model="Bank" type="number" class="form-control" placeholder="IBAN">
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row">
        <div class="col col-3">
          <input v-model="tel" type="tel" class="form-control" placeholder="Telefoni number">
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <input v-model="aadress" type="text" class="form-control" placeholder="Aadress">
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row">
        <div class="col col-3">
          <input v-model="text" type="text" class="form-control" placeholder="Maakond">
        </div>
        <div class="col col-3">
          <input v-model="Bank" type="number" class="form-control" placeholder="Postiindeks">
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <input v-model="Bank" type="text" class="form-control" placeholder="Asukoha pikkus, laius">
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-secondary" @click="goToHomeView" >Tagasi</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success" @click="goToShopView">Registreeri</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "RegisterCompany",

  methods: {

    goToShopView() {
      router.push({name: 'shopRoute'})
    },
    goToHomeView() {
      router.push({name: 'homeRoute'})
    }
  }
}

</script>


<style scoped>
.RegisterCompany {
  text-align: center;
}
</style>