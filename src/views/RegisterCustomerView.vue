<template>
  <div>
    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <div class="row mb-5">
            <h1>Registreeri kliendiks</h1>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">E-maili aadress</span>
              <input v-model="newCustomer.email" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta parool*</span>
              <input v-model="newCustomer.customerPassword" type="password" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Kinnita parool*</span>
              <input v-model="newCustomer.customerPassword" type="password" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta eesnimi*</span>
              <input v-model="newCustomer.customerFirstName" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta perekonnanimi*</span>
              <input v-model="newCustomer.customerLastName" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Telefoninumber</span>
              <input v-model="newCustomer.customerPhoneNumber" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Sisesta aadress</span>
              <input v-model="newCustomer.address" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <select v-model="selectedCountyId" @change="emitSelectedCountyId" class="form-select">
                <label for="customerCountyField" class="form-label mt-3">Vali maakond*</label>
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
              <input v-model="newCustomer.postalCode" type="text" class="form-control">
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
  <br>
  <br>
  <br>
</template>

<script>

import router from "@/router";
import RegisterNewCustomerEmail from "@/components/RegisterNewCustomerEmail.vue";

export default {
  name: "RegisterCustomer",
  components: {RegisterNewCustomerEmail},

  data() {
    return {
      selectedCountyId: 0,
      counties: [
        {
          countyId: 0,
          countyName: ''
        }
      ],
      newCustomer: {
        countyId: 0,
        address: '',
        postalCode: '',
        longitude: '',
        latitude: '',
        email: '',
        customerPassword: '',
        customerPhoneNumber: '',
        customerFirstName: '',
        customerLastName: ''
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