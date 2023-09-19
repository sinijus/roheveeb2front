<template>
  <img v-if="imageDataBase64" src="../assets/logo_roheveeb.png" class="img-thumbnail">
  <img v-else :src="imageDataBase64" class="img-thumbnail">
</template>
<script>
export default {
  name: 'AddNewProductImage',
  props: {
    imageDataBase64: String
  }
}
</script>