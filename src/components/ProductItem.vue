<template>
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
                  <input type="number" id="typeNumber" class="form-control" min="1" value="1" />
                </div>

              </div>
            </div>
            <div class="col">
              <div>
                <font-awesome-icon :icon="['fas', 'pen-to-square']" @click="goToEditView" type="button" size="lg" />
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'trash-can']" @click="deleteProduct" type="button" size="lg" />
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="addProductToCart" type="button" size="xl" aria-valuenow="5"/>
              </div>
            </div>


          </div>

      </div>

    </div>
    <div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: {
    product: [],
    orderId: 0
  },
  data() {
    return {
      addProductBody: {
        orderId: this.orderId,
        productId: this.product.productId,
        productAmount: 0
      },
      errorResponseAddProduct: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    addProductToCart() {
      this.$http.post("/order-product", this.addProductBody
      ).then(response => {
        //const responseBody = response.data
        alert('toode lisatud')
        //todo: Siia tuleb modal jätka ostlemist mine ostukorvi

      }).catch(error => {
        this.errorResponseAddProduct = error.response.data
        if (this.errorResponseAddProduct.errorCode === 777) {
          alert('Selline toote kogus ei ole enam saadaval.');
        } else {
          alert('addProductToCart Error');
        }
      })
    },
    deleteProduct() {
      this.$http.delete("/order-product", {
            params: {
              orderProductId: this.orderId,
            }
          }
      ).then(response => {
        alert('toode kustutatud')
        //todo: refresh page vaja teha shop views emitiga
      }).catch(error => {
        alert('deleteProduct Error')
      })
    },
    goToEditView() {
      router.push({name: 'addNewProductRoute'})
    }

  }

};
</script>

