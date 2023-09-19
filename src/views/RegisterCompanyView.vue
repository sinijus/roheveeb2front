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

import RegisterNewCompanyEmail from "@/components/RegisterNewCompanyEmail.vue";
</script>

<template>
  <div class="RegisterCompany">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>Registreeri müüjaks</h1>
        </div>
      </div>
    </div>
  </div>
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
            <input type="text" pattern="EE\d{18}" class="form-control" placeholder="EExxxxxxxxxxxxxxxxxx">
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
          <input type="number" class="form-control" id="newCustomerPhoneNumber"
                 aria-describedby="insertNewCustomerPhoneNumber" placeholder="+372 xx xxx xxx">
          <div id="insertNewCustomerPhoneNumber"></div>
        </div>
      </div>
    </form>
  </div>
  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <label for="exampleInputAadress" class="form-label">Sisesta aadress</label>
          <input type="aadress" class="form-control" id="insertCompanyAadress" aria-describedby="insertCompanyAadress"
                 placeholder="Aadress*">
          <div id="insertCompanyemail"></div>
        </div>
      </div>
    </form>
  </div>
  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <select v-model="selectedCountyId" @change="emitSelectedCountyId" class="form-select">
            <label for="companyCountyField" class="form-label">Vali maakond*</label>
            <option selected :value="0">Maakonnad</option>
            <option class="form-control" v-for="county in counties" :value="county.countyId" :key="county.countyId">
              {{ county.countyName }}
            </option>
          </select>
          <label for="insertNewCompanyPostalCodeField" class="form-label">Sisesta postiindeks*</label>
          <input type="text" class="form-control" id="insertNewCompanyPostalCode" placeholder="Postiindeks*">
        </div>
      </div>
    </form>
  </div>
  <br>
  <br>
  <div>
    <button type="button" class="btn btn-outline-light">Lisa logo</button>
  </div>
  <br>
  <br>
  <div>
    <a href="/" class="btn btn-outline-success m-2">Pealehele</a>
    <button type="button" class="btn btn-success" @click="goToShopView" id="tagasiButton">Registreeri</button>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>
<script>
import router from "@/router";

export default {
  name: "RegisterCompany",

  data() {
    return {
      selectedCountyId: 0,
      counties: [
        {
          countyId: 0,
          countyName: ''
        }
      ]
    }
  },
  methods: {

    goToShopView() {
      router.push({name: 'shopRoute'})
    },
    getCounties() {
      this.$http.get("/counties")
          .then(response => {
            this.counties = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    emitSelectedCountyId() {
      this.$emit('update-selected-county-id-event', this.selectedCountyId)
    },
  },
  beforeMount() {
    this.getCounties()
  }
}

</script>


