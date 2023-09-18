<style scoped>

fieldset {
  align-content: center;
}


form {
  justify-content: center;

}
.custom-dropdown-toggle {
  background-color: white;
  color: black;
}

.custom-dropdown-menu {
  background-color: white;
  color: black;
}
</style>

<script setup>

import RegisterNewCompanyEmail from "@/views/RegisterNewCompanyEmail.vue";
</script>

<template>


  <div>
    <RegisterNewCompanyEmail/>
    <div class="centered-container">
      <div>
        <form class="row row-cols-6 mt-4">
          <div class="mb-3">
            <label for="passwordField" class="form-label">Sisesta parool*</label>
            <input type="password" class="form-control" id="passwordField" placeholder="Parool*">
          </div>
          <div class="mb-3">
            <label for="confirmPCustomerasswordField" class="form-label">Kinnita parool*</label>
            <input type="password" class="form-control" id="confirmCustomerPasswordField" placeholder="Parool uuesti*">
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <div class="centered-container">
      <div>
        <form class="row row-cols-6 mt-4">
          <div class="mb-3">
            <label for="companyNameField" class="form-label">Sisesta firma nimi*</label>
            <input type="text" class="form-control" id="nameField" placeholder="Firma nimi*">

            <label for="insertNewCompanyRegisterCodeField" class="form-label">Sisesta registrikood*</label>
            <input type="text" class="form-control" id="insertNewCustomerFamilyname" placeholder="Registrikood*">
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <div class="centered-container">
      <div>
        <form class="row row-cols-6 mt-4">
          <div class="mb-3">
            <label for="companyIbanField" class="form-label">Sisesta IBAN*</label>
            <input type="text" class="form-control" id="ibanField" placeholder="IBAN*">
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <label for="newCustomerPhoneNumber" class="form-label">Telefoninumber</label>
          <input type="number" class="form-control" id="newCustomerPhoneNumber" aria-describedby="insertNewCustomerPhoneNumber" placeholder="+372 xx xxx xxx)">
          <div id="insertNewCustomerPhoneNumber"></div>
        </div>
      </div>
    </form>
  </div>

  <div>
    <div class="centered-container">
      <div>
        <form class="row row-cols-6 mt-4">
          <div class="mb-3">
            <label for="companyCountyField" class="form-label">Sisesta maakond*</label>
            <input type="text" class="form-control" id="countyNameField" placeholder="Maakond*">

            <label for="insertNewCompanyPostalCodeField" class="form-label">Sisesta postiindeks*</label>
            <input type="text" class="form-control" id="insertNewCompanyPostalCode" placeholder="Postiindeks*">
          </div>
        </form>
      </div>
    </div>
  </div>

  <br>
  <br>

  <div>
    <a href="/" class="btn btn-outline-success">Pealehele</a>
    <button type="button" class="btn btn-success" id="tagasiButton">Registreeri</button>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>



<!--<template>-->
<!--  <div class="RegisterCompany">-->
<!--    <div class="container text-center">-->

<!--      <div class="row">-->
<!--        <div class="col">-->
<!--          <h1>Registreeri müüjaks</h1>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="row">-->
<!--        <div class="col col-6">-->
<!--          <input v-model="username" type="email" class="form-control" id="username" placeholder="Email">-->
<!--        </div>-->
<!--        <div class="col">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="row">-->
<!--        <div class="col col-3">-->
<!--          <input v-model="password" type="password" class="form-control" placeholder="Parool">-->
<!--        </div>-->
<!--        <div class="col col-3">-->
<!--          <input v-model="password" type="password" class="form-control" placeholder="Parool uuesti">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-3">-->
<!--          <input v-model="text" type="text" class="form-control" placeholder="Eesnimi">-->
<!--        </div>-->
<!--        <div class="col col-3">-->
<!--          <input v-model="text" type="text" class="form-control" placeholder="Perekonnanimi">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-6">-->
<!--          <input v-model="Bank" type="number" class="form-control" placeholder="IBAN">-->
<!--        </div>-->
<!--        <div class="col">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-3">-->
<!--          <input v-model="tel" type="tel" class="form-control" placeholder="Telefoni number">-->
<!--        </div>-->
<!--        <div class="col">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-6">-->
<!--          <input v-model="aadress" type="text" class="form-control" placeholder="Aadress">-->
<!--        </div>-->
<!--        <div class="col">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-3">-->
<!--          <input v-model="text" type="text" class="form-control" placeholder="Maakond">-->
<!--        </div>-->
<!--        <div class="col col-3">-->
<!--          <input v-model="Bank" type="number" class="form-control" placeholder="Postiindeks">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col col-6">-->
<!--          <input v-model="Bank" type="text" class="form-control" placeholder="Asukoha pikkus, laius">-->
<!--        </div>-->
<!--        <div class="col">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col">-->
<!--          <button type="button" class="btn btn-secondary" @click="goToHomeView" >Tagasi</button>-->
<!--        </div>-->
<!--        <div class="col">-->
<!--          <button type="button" class="btn btn-success" @click="goToShopView">Registreeri</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import router from "@/router";-->

<!--export default {-->
<!--  name: "RegisterCompany",-->

<!--  methods: {-->

<!--    goToShopView() {-->
<!--      router.push({name: 'shopRoute'})-->
<!--    },-->
<!--    goToHomeView() {-->
<!--      router.push({name: 'homeRoute'})-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->


<!--<style scoped>-->
<!--.RegisterCompany {-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->