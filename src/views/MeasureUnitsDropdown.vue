<template>
  <select v-model="selectedMeasureId" @change="emitSelectedMeasureId" class="form-select m-2">
    <option selected :value="0">g</option>
    <option v-for="measureUnit in measureUnits" :value="measureUnit.measureId" :key="measureUnit.measureId">
      {{ measureUnit.measureName }}
    </option>
  </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'measureUnitsDropdown',
  data() {
    return {
      selectedMeasureId: 0,
      measureUnits: [
        {
          measureId: 0,
          measureName: ''
        }
      ]
    }
  },
  methods: {
    getMeasureUnits() {
      this.$http.get("/measureunits")
          .then(response => {
            this.measureUnits = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    emitSelectedMeasureId() {
      this.$emit('update-selected-measure-unit-id-event', this.selectedMeasureId)
    },
  },
  beforeMount() {
    this.getMeasureUnits()
  }

}
</script>

