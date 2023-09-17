<template>
  <div class="AddNewProduct">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>Lisa uus toode</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-4">
        </div>
        <div class="col col-4">
          <input v-model="text" type="text" class="form-control" id="inputField" placeholder="Toote nimi">
        </div>
        <div class="col col-4">
          <button type="button" class="btn btn-success">Otsi</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-4">
        </div>
        <div col col-6>
          <categoriesDropdown :categories="categories" :selected-category-id="selectedCategoryId"/>
        </div>
        <div class="col col-4">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-4">
        </div>
        <div col col-4>
          <typesDropdown :categories="categories" :selected-category-id="selectedCategoryId"/>
        </div>
        <div class="col col-4">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-4">
        </div>
        <div col col-4>
          <MeasureUnitsDropdown/>
        </div>
        <div class="col col-4">
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import CategoriesDropdown from "@/views/CategoriesDropdown.vue";
import TypesDropdown from "@/views/TypesDropdown.vue";
import MeasureUnitsDropdown from "@/views/MeasureUnitsDropdown.vue";

export default {
  name: "AddNewProduct",
  components: {MeasureUnitsDropdown, TypesDropdown, CategoriesDropdown},
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
  }
}

</script>