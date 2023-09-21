<template>
  <div>

    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <div class="row mb-5">
            <h1>Kliendi profiil</h1>
          </div>

          <div class="row">
            <div  class="input-group mb-3">
              <span class="input-group-text">Eesnimi</span>
              <input v-model="customerProfileInfo.firstName" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Perenimi</span>
              <input v-model="customerProfileInfo.lastName" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Aadress</span>
              <input v-model="customerProfileInfo.userLocationAddress" type="text" class="form-control">
            </div>
          </div>

          <div class="row">
            <div class="input-group mb-3">
              <CountyDropdown ref="countyDropdownRef"/>
            </div>
          </div>






          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Telefoninumber</span>
              <input v-model="customerProfileInfo.phoneNumber" type="number" class="form-control">
            </div>
          </div>



          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text">Postiindeks</span>
              <input v-model="customerProfileInfo.userLocationPostalCode" type="number" class="form-control">
            </div>
          </div>

        </div>
      </div>
    </div>

    <div>
      <a href="/shop" class="btn btn-outline-success m-2" >Tagasi poe vaatesse</a>
      <button type="button" class="btn btn-success" @click="updateCustomerProfile" >Salvesta muudatused</button>
    </div>
  </div>
</template>

<script>
import CountyDropdown from "@/components/CountyDropdown.vue";

export default {
  components: {CountyDropdown},
  data() {
    return {
      customerProfileInfo: {
        userContactId: 0,
        userLocationId: 0,
        userLocationCountyId: 0,
        userLocationCountyName: '',
        userLocationAddress: '',
        userLocationPostalCode: '',
        userEmail: '',
        phoneNumber: '',
        firstName: '',
        lastName: ''
      }, errorResponseCustomer:
          {
            message: '',
            errorCode: 0
          },
    }
  },
  methods: {
    getCustomerProfile() {
      this.$http.get("/profile/customer", {
            params: {
              userId: sessionStorage.getItem('userId')
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        this.customerProfileInfo = response.data
        this.$refs.countyDropdownRef.selectedCountyId = this.customerProfileInfo.userLocationCountyId
        // alert('getCustomerProfile then')
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        this.errorResponseCustomer = error.response.data
        alert('error')
      })
    },

    updateCustomerProfile() {
      alert("Teeme tulevikus - skoop 2 :)")
    },

  },
  beforeMount() {
    this.getCustomerProfile()
  }
}
</script>
