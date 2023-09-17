
  <template>
    <div class="ProfileCompany">
      <div class="container text-center">

        <div class="row">
          <div class="col">
            <h1>Profiil</h1>
          </div>
        </div>


        <div class="row">
          <div class="col col-3">
            <input v-model="text" type="text" class="form-control" placeholder="Ettevõtte nimi">
          </div>
          <div class="col col-3">
            <input v-model="text" type="text" class="form-control" placeholder="Registrikood">
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
            <button type="button" class="btn btn-secondary" >Muuda logo</button>
          </div>

        </div>
        <div class="row">
          <div class="col">
            <button type="button" class="btn btn-secondary" @click="goToHomeView" >Tagasi</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-success" @click="goToShopView">Salvesta muudatused</button>
          </div>
        </div>
      </div>
    </div>
  </template>


<script>
import router from "@/router";

export default {
  name: "ProfileCompany",

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

</style>