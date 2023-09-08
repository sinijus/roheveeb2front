<template>
  <div class="col col-3">
    <div class="row justify-content-right" @keydown.enter="login">
      <div>
        <input type="text" class="form-control" placeholder="e-mail" aria-describedby="addon-wrapping">
        <input type="text" class="form-control" placeholder="parool" aria-describedby="addon-wrapping">
      </div>
      <div>
        <div>
          <button type="button" class="btn btn-link">Registreeri</button>
        </div>
        <div>
          <button type="button" class="btn btn-success">Logi sisse</button>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'LoginRegisterBox'
}
</script>