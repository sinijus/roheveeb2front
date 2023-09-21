<template>
  <div>
    <div>
      <label for="Eesnimi">Eesnimi:</label>
<!--      <input type="text" id="nimi" v-model="customerProfileInfo.firstName"/>-->
      {{customerProfileInfo.firstName}}
    </div>
    <div>
      <label for="Perenimi">Perenimi:</label>
<!--      <input type="text" id="nimi" v-model="formData.lastName"/>-->
      {{customerProfileInfo.lastName}}
    </div>
    <div>
      <label for="email">e-mail:</label>
<!--      <input type="text" id="email" v-model="formData.email"/>-->
      {{customerProfileInfo.userEmail}}
    </div>
    <div>
      <label for="aadress">Aadress:</label>
<!--      <input type="text" id="aadress" v-model="formData.aadress"/>-->
      {{customerProfileInfo.userLocationAddress}}
    </div>
    <div>
      <label for="maakond">Maakond:</label>
<!--      <input type="text" id="maakond" v-model="formData.maakond"/>-->
      {{customerProfileInfo.userLocationCountyName}}
    </div>
    <div>
      <label for="postiindeks">Postiindeks:</label>
<!--      <input type="text" id="postiindeks" v-model="formData.postiindeks"/>-->
      {{customerProfileInfo.userLocationPostalCode}}
    </div>
    <div>
      <label for="telefon">Telefon:</label>
<!--      <input type="text" id="telefon" v-model="formData.telefon"/>-->
      {{customerProfileInfo.phoneNumber}}
    </div>
    <button @click="saveToDatabase">Save</button>
  </div>
</template>

<script>
export default {
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
        // alert('getCustomerProfile then')
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        this.errorResponseCustomer = error.response.data
        alert('error')
      })
    },

  },
  beforeMount() {
    this.getCustomerProfile()
  }
}
</script>
