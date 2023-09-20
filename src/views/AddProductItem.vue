<template>
  <div class="product-item" style="justify-content: center" @click="goToAddProductView" type="button">
    <font-awesome-icon  :icon="['fas', 'plus']"  size="2xl"/>
    <div>
      Lisa uus toode...
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddProductItem',
  props: {
    goToAddProductView: {}
  },
  methods:{

  },
  mounted() {

  }
}
</script>