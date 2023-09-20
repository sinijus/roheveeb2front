<template>
  <font-awesome-icon class="product-item" :icon="['fas', 'plus']" @click="goToAddProductView" type="button" size="2xl"/>
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