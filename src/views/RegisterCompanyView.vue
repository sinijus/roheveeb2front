

<script setup>

import RegisterNewCompanyEmail from "@/components/RegisterNewCompanyEmail.vue";
import registerNewCompanyEmail from "@/components/RegisterNewCompanyEmail.vue";
</script>

<template>
  <div>
    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <div class="row mb-5">
            <h1>Registreeri müüjaks</h1>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">E-maili aadress</span>
              <input v-model="newCompany.email" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta parool*</span>
              <input v-model="newCompany.companyPassword" type="password" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Kinnita parool*</span>
              <input v-model="newCompany.companyPassword" type="password" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta firma nimi*</span>
              <input v-model="newCompany.companyName" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta registrikood*</span>
              <input v-model="newCompany.registerCode" type="number" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">IBAN*</span>
              <input v-model="newCompany.iban" type="number" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Telefoninumber</span>
              <input v-model="newCompany.phoneNumber" type="number" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta aadress</span>
              <input v-model="newCompany.address" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <select v-model="selectedCountyId" @change="emitSelectedCountyId" class="form-select">
                <option selected :value="0">Maakonnad</option>
                <option class="form-control" v-for="county in counties" :value="county.countyId" :key="county.countyId">
                  {{ county.countyName }}
                </option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta postiindeks*</span>
              <input v-model="newCompany.postalCode" type="text" class="form-control">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div>
    <a href="/" class="btn btn-outline-success m-2">Pealehele</a>
    <button type="button" class="btn btn-success" @click="goToShopView" id="tagasiButton">Registreeri</button>
  </div>
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
      ],
      newCompany: {
        email: '',
        companyPassword: '',
        countyId: 0,
        address: '',
        postalCode: '',
        longitude: '',
        latitude: '',
        logoImagedata: '',
        companyName: '',
        phoneNumber: '',
        registerCode: '',
        iban: ''
      }
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


