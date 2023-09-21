<template>
  <div>
    <img alt="Vue logo" src="../assets/logo_roheveeb.png" height="200">
  </div>
  <div>
    <table class="table table-bordered"
           style="border:1px solid black;margin-left:auto;margin-right:auto">
      <thead>
      <tr class="table-active"></tr>
      </thead>
      <tbody>

      <tr>
        <td colspan="2" class="table-active">Müüja</td>
        <td colspan="2" class="table-active">Toode</td>
        <td colspan="2" class="table-active">Ühik</td>
        <td colspan="2" class="table-active">Kogus</td>
        <td colspan="2" class="table-active">Hind</td>
        <td colspan="2" class="table-active">Vahesumma</td>
        <td colspan="2" class="table-active">Kustuta</td>

      </tr>

      <tr v-for="(cartProduct, index) in this.cartProducts">
        <td colspan="2"> {{ cartProduct.companyName }}</td>
        <td colspan="2" class="table-active"> {{ cartProduct.productName }}</td>
        <td colspan="2" class="table-active"> {{ cartProduct.measureUnitName }}</td>
        <td colspan="2" class="table-active"> {{ cartProduct.amount }} </td>
        <!--        <input class="quantity" id="id_form-0-quantity" min="1" name="form-0-quantity" type="number">-->
        <td colspan="2" class="table-active">{{ cartProduct.price }} €</td>
        <td colspan="2" class="table-active"> {{ calculateProductSum(cartProduct.amount, cartProduct.price) }} €</td>
        <td colspan="2" class="table-active">
          <font-awesome-icon :icon="['fas', 'trash-can']" type="button"
                             @click="deleteProductFromCart(cartProduct.orderProductId)"/>
        </td>
      </tr>
      <tr>
        <td colspan="14">
          Summa kokku: {{ cartSum }} €
        </td>
      </tr>

      </tbody>
      <tbody>
      <tr></tr>
      </tbody>
    </table>
  </div>

  <div class="grid-container">
    <component class="cart-item">
      <form>
        <fieldset class="col-8">
          <legend>Tarne:</legend>
          <div v-for="transportOption in transportOptions">
            <input type="radio" id="willgetitmyself" name="delivery" value="willgetitmyself" checked/>
            <label for="willgetitmyself">{{ transportOption.method }} {{transportOption.fee }} €</label>
          </div>
          <p></p>

        </fieldset>
      </form>
    </component>
    <component class="cart-item">
      <form>
        <fieldset class="col-6">
          <legend>Makseviis:</legend>
          <div v-for="paymentOption in paymentOptions">
            <input type="radio" id="paymentType" name="paymentmethod" value="transfer" checked/>
            <label for="banktransfer">{{ paymentOption.paymentMethod }}</label>
          </div>
          <p></p>
        </fieldset>
      </form>
    </component>
  </div>

  <div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button">Esita Tellimus</button>
    </div>
  </div>









</template>


<script>

import {NO_PRODUCTS_IN_CART} from "@/assets/script/error.message";

export default {
  data() {
    return {
      cartProducts: [
        {
          companyId: 0,
          companyLocationId: 0,
          companyLocationCountyId: 0,
          companyLocationCountyName: '',
          companyLocationAddress: '',
          companyLogoImageData: '',
          companyName: '',
          companyPhoneNumber: '',
          companyRegisterCode: '',
          companyIban: '',
          typeId: 0,
          typeCategoryId: 0,
          typeCategoryName: '',
          typeName: '',
          measureUnitId: 0,
          measureUnitName: '',
          orderProductId: 0,
          productId: 0,
          productName: '',
          price: 0,
          amount: 0
        }
      ],
      errorCartProducts: {
        message: '',
        errorCode: 0
      },
      transportOptions: [
        {
          id: 0,
          method: '',
          fee: 0
        }
      ],
      paymentOptions: [
        {
          paymentId: 0,
          paymentMethod: '',
          bankImageData: ''
        }
      ],
      cartSum: 0,

    }
  },
  methods: {
    getCartProducts() {
      this.$http.get("/cart", {
            params: {
              orderId: sessionStorage.getItem('orderId'),
            }
          }
      ).then(response => {
        this.cartProducts = response.data
      }).catch(error => {
        this.errorCartProducts = error.response.data
        if (this.errorCartProducts.errorCode === 2222) {
          alert(NO_PRODUCTS_IN_CART)
        } else {
          alert('cartProduct Error')
        }
      })
    },
    getTransportOptions() {
      this.$http.get("/transports")
          .then(response => {
            this.transportOptions = response.data
          })
          .catch(error => {
            alert('transportOptions error')
          })
    },
    getPaymentOptions() {
      this.$http.get("/payment-methods")
          .then(response => {
            this.paymentOptions = response.data
          })
          .catch(error => {
            alert('paymentOptions error')
          })
    },
    calculateProductSum(amount, price) {
      return amount * price

    },
    deleteProductFromCart(orderProductId) {
      this.$http.delete("/order-product", {
            params: {
              orderProductId: orderProductId,
            }
          }
      ).then(response => {
        this.getCartProducts()
      }).catch(error => {
        alert('deleteProductFromCart Error')
      })
    },
    calculateCartSum() {
      let total = 0;
      for (const cartProduct of this.cartProducts) {
        total = total + (cartProduct.price * cartProduct.amount)
      }
      this.cartSum = total;
    },
  },

  beforeMount() {
    this.getCartProducts()
    this.getTransportOptions()
    this.getPaymentOptions()
    this.calculateCartSum()
  }
}

</script>


<style scoped>
table {
  width: 50%;
  border-collapse: collapse; /* Collapse borders to remove spacing between cells */
  padding: 8px; /* Add some padding for better readability */
}

fieldset {
  margin-right: 800px;
}

.quantity {
  width: 50px; /* Adjust the width as needed */
  text-align: left; /* Align text to the left */
}


form {
  margin-left: 80px;
  margin-top: 40px;
}
</style>