<template>
  <div class="page">
    <div class="container">
      <div class="row ">
        <div class="col">
          <h1>E-pood</h1>
        </div>
        <div class="col">
          <div v-if="isCompany">
          <v-font-awesome-icon :icon="['fas', 'cart-shopping']" style="margin-right: 10px;" @click="goToCart" type="button" size="xl"/>
          {{ orderInfo.numberOfProducts }}
          </div>

          <template v-if="isCompany">
            <v-font-awesome-icon :icon="['fas', 'cart-shopping']" style="margin-right: 10px;" @click="goToCart" type="button" size="xl"/>
            {{ orderInfo.numberOfProducts }}
          </template>

          <font-awesome-icon :icon="['fas', 'user']" size="xl" @click="goToProfile" type="button"
                             style="margin-right: 10px;"/>
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" size="xl" @click="logOut" type="button" />
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
                :order-id="orderInfo.orderId" :is-company="isCompany" :is-admin="isAdmin"
                @event-update-product="findAllProducts()"
                @event-update-order="getPendingOrderInfo"/>
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
      let roleName = sessionStorage.getItem('roleName');

      if (roleName === 'company') {
        router.push({name: 'profileCompanyRoute'});
      }else {
        router.push({name: 'profileCustomerRoute'})
      }


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
    getPendingOrderInfo() {
      this.$http.get("/order/pending", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        //alert('number of products: ' + this.orderInfo.numberOfProducts)
      }).catch(error => {
        alert('getPendingOrderId Error')
      })
    },
    logOut() {
      sessionStorage.clear()
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },
    goToAddProductView() {
      router.push({name: 'addNewProductRoute'})
    },

  },
  mounted() {
    this.getPendingOrderInfo()
  },
  beforeMount() {
    this.findAllProducts()
    this.$emit('event-update-nav-menu')
  }
}
</script>

