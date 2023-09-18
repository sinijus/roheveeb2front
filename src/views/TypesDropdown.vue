<template>
    <select v-model="selectedTypeId" @change="emitSelectedTypeId" class="form-select">
      <option selected :value="0">Kartul</option>
      <option v-for="type in types" :value="type.typeId" :key="type.typeId">{{type.typeName }}
      </option>
    </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'typesDropdown',
 data() {
    return {
      selectedTypeId: 0,
      types: [
        {
          typeId: 0,
          typeName: ''
        }
      ]
    }
 },
  methods: {
    getTypes() {
      this.$http.get("/types")
          .then(response=> {
            this.types = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    emitSelectedTypeId() {
      this.$emit('update-selected-type-id-event', this.selectedTypeId)
    },
  },
  beforeMount() {
    this.getTypes()
  }
}
</script>