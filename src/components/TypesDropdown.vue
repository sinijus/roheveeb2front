<template>
    <select v-model="selectedTypeId" @change="emitSelectedTypeIdAndCategoryId" class="form-select">
      <option selected :value="0">-- vali tüüp --</option>
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
          categoryId: 0,
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
    emitSelectedTypeIdAndCategoryId() {
      this.$emit('update-selected-type-id-event', this.selectedTypeId)
      for (let type of this.types) {
        if (type[0] === this.selectedTypeId) {
          this.$emit('update-type-category-id-event', type[1])
        }
      }
    },
    initializeTypes() {

    },
  },
  beforeMount() {
    this.getTypes()
  }
}
</script>