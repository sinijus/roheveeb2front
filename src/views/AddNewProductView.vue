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
              <!--              todo: catgories dropdowni on vaja ainult uue tüübi lisamisel, vanade puhul on info juba olemas-->
              <categoriesDropdown class="form-control"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <typesDropdown class="form-control" @update-selected-type-id-event="setTypeId"/>
              <button type="button" class="btn btn-outline-light" @click="openAddType()">Lisa</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <MeasureUnitsDropdown class="form-control" @update-selected-measure-unit-id-event="setUnitId"/>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="Hind" v-model="addNewProductRequest.price">
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <div class="input-group mb-3">
            <div class="input-group">
              <input type="number" class="form-control" placeholder="Kogus" v-model="addNewProductRequest.stockBalance">
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
<!--        <div class="col col-3">-->
<!--          &lt;!&ndash;          <button type="button" class="btn btn-outline-light m-1">Lisa toote pilt</button>&ndash;&gt;-->

<!--        </div>-->
        <AddNewProductImage @event-emit-base64="setAndAddProductRequestImageData"/>
<!--        <div class="col col-3">-->
<!--                    <ImageInput/>-->
<!--        </div>-->
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
        </div>
        <div class="col col-3">
          <button type="button" class="btn btn-success" @click="validateAndAddNewProduct">Kinnita</button>
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
import AddType from "@/components/modal/AddType.vue";
import {FILL_MANDATORY_FIELDS, PRODUCT_TYPE_NAME_UNAVAILABLE} from "@/assets/script/error.message";
import AddNewProductImage from "@/components/AddNewProductImage.vue";

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
    addNewProduct() {
      this.$http.post("/product", this.addNewProductRequest
      ).then(response => {
        alert('toode lisatud')
        //todo: tühjenda väljad
      }).catch(error => {
        this.errorResponseAddNewProduct = error.response.data
        if (this.errorResponseAddNewProduct.errorCode === 1111) {
          alert(PRODUCT_TYPE_NAME_UNAVAILABLE);
        }
        alert('addProduct errorblock')
      })
    },

    goToShop() {
      router.push({name: 'shopRoute'})
    },
    openAddType() {
      this.$refs.addTypeRef.$refs.modalRef.openModal()
    },
    setAndAddProductRequestImageData(imageDataBase64) {
      this.addNewProductRequest.imageData = imageDataBase64
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
      return this.addNewProductRequest.price != '' && this.addNewProductRequest.typeId != '' &&
          this.addNewProductRequest.productName != '' && this.addNewProductRequest.measureUnitId != '' &&
          this.addNewProductRequest.companyId != '' && this.addNewProductRequest.stockBalance != ''
          // &&      this.addNewProductRequest.imageData != ''
    },
  },
  mounted() {
    this.addNewProductRequest.companyId = sessionStorage.getItem('userId')
  }

}

</script>