<template>
  <div>
    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <div class="row mb-5">
            <h1>Firma profiil</h1>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Firma nimi</span>
              <input type="text" class="form-control">
              {{companyProfileInfo.companyName}}
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Registrikood</span>
              <input type="number" class="form-control">
              {{companyProfileInfo.registerCode}}
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">IBAN</span>
              <input type="number" class="form-control">
              {{companyProfileInfo.iban}}
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Telefoninumber</span>
              <input type="number" class="form-control">
              {{companyProfileInfo.phoneNumber}}
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Aadress</span>
              <input type="text" class="form-control">
              {{companyProfileInfo.locationAddress}}
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
              <span class="input-group-text">Postiindeks</span>
              <input type="text" class="form-control">
              {{companyProfileInfo.locationPostalCode}}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div>
    <a href="/shop" class="btn btn-outline-success m-2" @click="goToShopView">Tagasi poe vaatesse</a>
    <button type="button" class="btn btn-success" @click="goToShopView">Salvesta muudatused</button>
  </div>
  <br>
  <br>
  <br>
</template>


<script>
import router from "@/router";

export default {
  name: "ProfileCompany",

  data() {
    return {
      selectedCountyId: 0,
      counties: [
        {
          countyId: 0,
          countyName: ''
        }
      ],
      companyProfileInfo: {
        userEmail: '',
        userPassword: '',
        locationCountyName: '',
        locationAddress: '',
        locationPostalCode: '',
        companyName: '',
        phoneNumber: '',
        registerCode: '',
        iban: ''
      },errorResponseCompany:
          {
            message: '',
            errorCode: 0
          },
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
    getCompanyProfile() {
      this.$http.get("/profile/company", {
            params: {
              companyId: sessionStorage.getItem('companyId'),

            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        this.companyProfileInfo= response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        this.errorResponseCompany = error.response.data
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

</style>