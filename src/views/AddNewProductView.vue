<template>
  <div class="AddNewProduct">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">
          <h1>Lisa uus toode</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <input v-model="text" type="text" class="form-control m-1" id="inputField" placeholder="Toote nimi">
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-outline-light m-1">Otsi</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div col col-3>
          <categoriesDropdown/>
        </div>
        <div class="col col-3">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div col col-3>
          <typesDropdown/>
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-outline-light m-1">Lisa</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div col col-3>
          <MeasureUnitsDropdown/>
        </div>
        <div class="col col-3">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <input v-model="text" type="text" class="form-control m-1" id="inputField" placeholder="Hind">
        </div>
        <div class="col col-3">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-outline-light m-1">Lisa toote pilt</button>
        </div>
        <div class="col col-3">
          <img src="https://placehold.it/200x200" class="rounded float-end" alt="...">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-success m-1">Kinnita</button>
        </div>
        <div class="col col-3">
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

<style>


</style>