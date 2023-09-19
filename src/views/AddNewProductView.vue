<template>
  <div class="AddNewProduct">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3 mb-3">
          <h1>Lisa uus toode</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Toote nimi">
            <button type="button" class="btn btn-outline-light">Otsi</button>
          </div>

        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <categoriesDropdown class="form-control"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <typesDropdown class="form-control"/>
              <button type="button" class="btn btn-outline-light">Lisa</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <MeasureUnitsDropdown class="form-control"/>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="Hind">
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">
          <button type="button" class="btn btn-outline-light m-1">Lisa toote pilt</button>
        </div>
        <AddNewProductImage/>
        <div class="col col-3">
          <ImageInput/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-success" @click="goToShop">Kinnita</button>
        </div>
        <div class="col col-3">
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";
import TypesDropdown from "@/components/TypesDropdown.vue";
import MeasureUnitsDropdown from "@/components/MeasureUnitsDropdown.vue";
import router from "@/router";
import ImageInput from "@/views/ImageInput.vue";
import AddNewProductImage from "@/views/AddNewProductImage.vue";

export default {
  name: "AddNewProduct",
  components: {AddNewProductImage, ImageInput, MeasureUnitsDropdown, TypesDropdown, CategoriesDropdown},
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
    goToShop() {
      router.push({name: 'shopRoute'})
    },
    setAddNewProductRequestImageData(imageDataBase64) {
      this.newProduct.imageData = imageDataBase64
    }
  },

}

</script>