<template>
  <div class="page">
    <div class="container">
      <div class="row ">
        <div class="col">
          <h1>E-pood</h1>
        </div>
      </div>

      <div v-if="showProducts">
        <div class="grid-page">
          <div class="grid-item"  v-if="isCompany">
            <AddProductItem :go-to-add-product-view="goToAddProductView"/>
          </div>
          <div class="grid-item" v-for="product in products" :key="product.id">
            <product-item
                :product="product"
                          :order-id="orderId" :is-company="isCompany" :is-admin="isAdmin"
                          @event-update-product="findAllProducts"
                          @event-update-order="findAllProducts"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import router from "@/router";
import ProductItem from "@/components/ProductItem.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AddProductItem from "@/components/AddProductItem.vue";

export default {
  name: "ShopView",
  components: {AddProductItem, FontAwesomeIcon, ProductItem: ProductItem},

  props: {
    isCompany: Boolean,
    isAdmin: Boolean
  },

  data() {
    return {
      orderId: Number(sessionStorage.getItem('orderId')),
      products: [
        {
          productId: 0,
          companyId: 0,
          companyLocationId: 0,
          companyLocationCountyId: 0,
          companyLocationCountyName: '',
          companyName: '',
          productTypeId: 0,
          productTypeName: '',
          productTypeCategoryId: 0,
          productTypeCategoryName: '',
          measureUnitId: 0,
          measureUnitName: '',
          productImageId: 0,
          productImageData: '',
          productName: '',
          price: 0,
          productBalance: 0
        }
      ],

      errorResponseProducts: {
        message: '',
        errorCode: 0
      },

      orderInfo: {
        orderId: 0,
        numberOfProducts: 0
      },

      showProducts: false
    }

  },

  methods: {

    findAllProducts() {
      this.updateNavMenu()
      this.$http.get("/products")
          .then(response => {
            this.products = response.data
            this.showProducts = true
          })
          .catch(error => {
            this.errorResponseProducts = error.response.data
            if (this.errorResponseProducts.errorCode === 222) {
              this.showProducts = false
              alert('ühtegi toodet ei leitud')
              return
            }
            router.push({name: 'errorRoute'})
          })
    },

    goToAddProductView() {
      router.push({name: 'addNewProductRoute'})
    },
    updateNavMenu() {
      this.$emit('event-update-nav-menu')
    },

  },
  mounted() {
    this.updateNavMenu()
  },
  beforeMount() {
    this.findAllProducts()
    this.$emit('event-update-nav-menu')
  }
}
</script>

