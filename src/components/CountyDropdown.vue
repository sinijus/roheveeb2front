<template>
  <select v-model="selectedCountyId" @change="emitSelectedCountyId" class="form-select"
          aria-label="Default select example">
    <option selected :value="0">Kõik maakonnad</option>
    <option v-for="county in counties" :value="county.countyId" :key="county.countyId">{{
        county.countyName
      }}
    </option>
  </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'CountyDropdown',
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
      this.$emit('event-update-selected-county-id', this.selectedCountyId)
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
</style>