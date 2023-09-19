<template>
  <div class="page">
    <div class="container">
      <div class="row ">
        <div class="col">
          <h1>E-pood</h1>
        </div>
        <div class="col">
          <font-awesome-icon :icon="['fas', 'user']" size="lg" @click="goToProfile" type="button"
                             style="margin-right: 10px;"/>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="goToCart" type="button" size="lg"/>
          {{orderInfo.numberOfProducts}}
        </div>
      </div>

      <div v-if="showProducts" >
        <div class="grid-page">
          <div class="grid-item" v-for="product in products" :key="product.id">
            <product-item :product="product" :order-id="orderInfo.orderId" :is-company="isCompany" :is-admin ="isAdmin"
                          @event-update-product="findAllProducts()"/>
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

  props: {
    isCompany: false,
    isAdmin: false
  },

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
      showProducts: false
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
    getPendingOrderId() {
      this.$http.get("/order/pending", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.orderInfo = response.data
alert(this.orderInfo.orderId)
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
    this.$emit('event-update-nav-menu')
  }
}
</script>

