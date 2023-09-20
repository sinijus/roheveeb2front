<template>
  <AddItemsToCart ref="addItemsToCartRef" @event-update-order="handleOrderUpdate"/>
  <div class="product-item">
    <div class="content">
      <div class="row">
        <div><img :src="product.productImageData" alt="Product Image"/></div>
        <div>{{ product.productName }}</div>
        <div>{{ product.companyName }}</div>
        <div class="row">
          <div class="col col-6">
            <div>{{ 'Ühik: ' + product.measureUnitName }}</div>
            <div>{{ product.price + '€' }}</div>
            <div>
              <div class="form-outline col-7">
                <input type="number" class="form-control" min="1" v-model="addProductBody.productAmount"/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <font-awesome-icon v-if="isCompany" :icon="['fas', 'pen-to-square']" @click="goToEditView" type="button"
                                 size="lg"/>
              <div v-else>
                <p></p>
              </div>
            </div>
            <div class="row">
              <font-awesome-icon v-if="isCompany" :icon="['fas', 'trash-can']" @click="deleteProduct" type="button"
                                 size="lg"/>
              <div v-else>
                <p></p>
              </div>
            </div>
            <div class="row">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="addProductToCart" type="button" size="xl"
                                 aria-valuenow="5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import AddItemsToCart from "@/components/AddItemsToCart.vue";

export default {
  components: {AddItemsToCart},
  props: {
    product: {},
    orderId: Number,
    isCompany: Boolean,
    isAdmin: Boolean
  },
  data() {
    return {
      addProductBody: {
        orderId: 0,
        productId: 0,
        productAmount: 1
      },
      errorResponseAddProduct: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    addProductToCart() {

      this.addProductBody.orderId = this.orderId
      this.addProductBody.productId = this.product.productId

      alert('orderId: ' + this.addProductBody.orderId + '\n productId: ' + this.addProductBody.productId + '\n amount: ' + this.addProductBody.productAmount)
      this.$http.post("/order-product", this.addProductBody
      ).then(response => {
        //const responseBody = response.data
        alert('toode lisatud')
        this.openAddItemsToCart()

      }).catch(error => {
        this.errorResponseAddProduct = error.response.data
        if (this.errorResponseAddProduct.errorCode === 777) {
          alert('Selline toote kogus ei ole enam saadaval.')
          return
        }
        alert('addProductToCart Error');

      })
    },
    openAddItemsToCart() {
      this.$refs.addItemsToCartRef.$refs.modalRef.openModal()
    },

    deleteProduct() {
      this.$http.delete("/product", {
            params: {
              productId: this.product.productId,
            }
          }
      ).then(response => {
        alert('toode kustutatud')
        this.handleProductUpdate()
      }).catch(error => {

      })
    },
    handleProductUpdate() {
      this.$emit('event-update-product')
    },
    handleOrderUpdate() {
      this.$emit('event-update-order')
    },
    goToEditView() {
      router.push({name: 'addNewProductRoute'})
    },

  },
  mounted() {
  }
}
</script>

