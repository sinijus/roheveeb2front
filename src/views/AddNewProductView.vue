<template>
  <AddType ref="addTypeRef"/>
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
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Toote nimi"
                     v-model="addNewProductRequest.productName">
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <typesDropdown ref="types" class="form-control"
                             @update-selected-type-id-event="setTypeId"
                             @update-type-category-id-event="updateCategoryIdDropdown"/>
              <button type="button" class="btn btn-outline-light" @click="openAddType()">Lisa</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <categoriesDropdown ref="category" class="form-control"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <MeasureUnitsDropdown ref="measureUnit" class="form-control"
                                    @update-selected-measure-unit-id-event="setUnitId"/>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="Hind" min="1"
                     v-model="addNewProductRequest.price">
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="Kogus" min="1"
                     v-model="addNewProductRequest.stockBalance">
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <AddNewProductImage ref="addImage" @event-emit-base64="setAddNewProductRequestImageData"/>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <button type="button" class="btn btn-success" @click="validateAndAddNewProduct">Kinnita</button>
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
import AddType from "@/components/modal/AddType.vue";
import AddNewProductImage from "@/components/AddNewProductImage.vue";
import {FILL_MANDATORY_FIELDS, PRODUCT_TYPE_NAME_UNAVAILABLE} from "@/assets/script/error.message";

export default {
  name: "AddNewProductView",
  components: {
    AddNewProductImage,
    AddType,
    ImageInput, MeasureUnitsDropdown, TypesDropdown, CategoriesDropdown
  },
  data() {
    return {
      selectedCategoryId: 0,
      categories: [
        {
          categoryId: 0,
          categoryName: ''
        }
      ],
      addNewProductRequest: {
        companyId: 0,
        typeId: 0,
        measureUnitId: 0,
        imageData: '',
        productName: '',
        price: 0,
        stockBalance: 0
      },
      errorResponseAddNewProduct: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    goToShop() {
      router.push({name: 'shopRoute'})
    },
    setAddNewProductRequestImageData(imageDataBase64) {
      this.addNewProductRequest.imageData = imageDataBase64
    },
    openAddType() {
      this.$refs.addTypeRef.$refs.modalRef.openModal()
    },
    setTypeId(typeId) {
      this.addNewProductRequest.typeId = typeId;
    },
    setUnitId(unitId) {
      this.addNewProductRequest.measureUnitId = unitId;
    },
    validateAndAddNewProduct() {
      if (this.areInputFieldsFilled()) {
        this.addNewProduct()
      } else {
        alert(FILL_MANDATORY_FIELDS)
      }
    },
    areInputFieldsFilled() {
      return this.addNewProductRequest.price !== 0 && this.addNewProductRequest.typeId !== 0 &&
          this.addNewProductRequest.productName !== '' && this.addNewProductRequest.measureUnitId !== 0 &&
          this.addNewProductRequest.companyId !== 0 && this.addNewProductRequest.stockBalance !== 0
          && this.addNewProductRequest.imageData !== ''
    },
    addNewProduct() {
      this.$http.post('/product', this.addNewProductRequest
      ).then(response => {
        alert('toode lisatud')
        this.initializeFields();
      }).catch(error => {
        this.errorResponseAddNewProduct = error.response.data
        if (this.errorResponseAddNewProduct.errorCode === 1111) {
          alert(PRODUCT_TYPE_NAME_UNAVAILABLE);
        }
        alert('addProduct errorblock')
      })
    },
    initializeFields: function () {
      this.addNewProductRequest.productName = ''
      this.addNewProductRequest.price = 0
      this.addNewProductRequest.stockBalance = 0
      this.$refs.types.selectedTypeId = 0
      this.$refs.measureUnit.selectedMeasureId = 0
      this.$refs.addImage.imageDataBase64 = ''
    },
    updateCategoryIdDropdown(categoryId) {
      this.$refs.category.selectedCategoryId = categoryId
    },
  },
  mounted() {
    this.addNewProductRequest.companyId = sessionStorage.getItem('companyId')
  }


}

</script>