<template>
  <template>
    <select v-model="selectedCiyId" @change="emitSelectedCityId" class="form-select"
            aria-label="Default select example">
      <option selected :value="0">Kõik linnad</option>
      <option v-for="city in cities" :value="city.cityId" :key="city.cityId">{{ city.cityName }}</option>
    </select>
  </template>
  <script>
    import router from "@/router";

    export default {
      name: 'CitiesDropdown',
      data() {
        return {
          selectedCityId: 0,

          cities: [
            {
              cityId: 0,
              cityName: ''
            }
          ]
        }
      },
      methods: {

        getCities() {
          this.$http.get("/cities")
              .then(response => {
                this.cities = response.data
              })
              .catch(error => {
                router.push({name: 'errorRoute'})
              })
        },
        emitSelectedCityId() {
          this.$emit('event-update-selected-city-id', this.selectedCityId)
        },

      },
      beforeMount() {
        this.getCities()
      }

    }
  </script>
</template>
<script>
export default {
  name: 'countyDropdown'
}
</script>
<style scoped>

fieldset {
  align-content: center;
}


form {
  justify-content: center;

}
</style>