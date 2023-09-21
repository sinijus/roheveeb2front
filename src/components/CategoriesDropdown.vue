<template>
    <select v-model="selectedCategoryId" @change="emitSelectedCategoryId" class="form-select">
      <option selected :value="0">-- vali kategooria --</option>
      <option v-for="category in categories" :value="category.categoryId" :key="category.categoryId">
        {{category.categoryName }}
      </option>
    </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'categoriesDropdown',
  data() {
    return {
      selectedCategoryId: 0,
      categories: [
        {
          categoryId: 0,
          categoryName: ''
        }
      ]
    }
  },
  methods: {
    getCategories() {
      this.$http.get("/categories")
          .then(response => {
            this.categories = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    emitSelectedCategoryId() {
      this.$emit('update-selected-category-id-event', this.selectedCategoryId)
    },
  },
  beforeMount() {
    this.getCategories()
  }
}
</script>