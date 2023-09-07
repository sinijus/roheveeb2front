<template>
  <div class="row justify-content-end" @keydown.enter="login">
  <div class="col-4">
    <input type="text" class="form-control" placeholder="e-mail" aria-describedby="addon-wrapping">
  </div>
  <div class="col-4">
    <input type="text" class="form-control" placeholder="parool" aria-describedby="addon-wrapping">
  </div>
  </div>
</template>
<script>
export default {
  name: 'LoginRegisterBox'
}
</script>