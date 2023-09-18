<template class="leht">
  <div class="page">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>E-pood</h1>
        </div>
        <div class="col">
          <font-awesome-icon :icon="['fas', 'user']" size="lg" @click="goToProfile" type="button"
                             style="margin-right: 10px;"/>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="goToCart" type="button" size="lg"/>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Maakond
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Müüja
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Juurviljad ja köögiviljad
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Tootevalik
          </button>
        </div>
      </div>

      <div>
        <div class="grid-page">
          <div class="grid-item" v-for="product in products" :key="product.id">
            <product-item :product="product" :order-id="orderInfo.orderId"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import router from "@/router";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "ShopView",
  components: {ProductItem: ProductItem},

  data() {
    return {
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
    }

  },

  methods: {


    goToProfile() {
      router.push({name: 'profileRoute'})
    },
    goToCart() {
      router.push({name: 'cartRoute'})
    },

    findAllProducts() {
      this.$http.get("/products")
          .then(response => {
            this.products = response.data
          })
          .catch(error => {
            this.errorResponseProducts = error.response.data
            if (this.errorResponseProducts.errorCode === 222) {
              alert('ühtegi toodet ei leitud')
            }
            router.push({name: 'errorRoute'})
          })
    },
    getPendingOrderId() {
      this.$http.get("/order/pending", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.orderId = response.data
        alert('orderId: ' + this.orderInfo.orderId)
      }).catch(error => {
        alert('getPendingOrderId Error')
      })
    },

  },
  mounted() {
    this.getPendingOrderId()
  },
  beforeMount() {
    this.findAllProducts()

  }

}


</script>

