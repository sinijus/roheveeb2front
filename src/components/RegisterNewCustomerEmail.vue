<template>
  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">E-maili aadress</label>
          <input type="email" class="form-control" id="insertCustomeremail" aria-describedby="insertCustomeremail" placeholder="Sisesta oma e-mail*">
          <div id="insertCustomeremail"></div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'RegisterNewCustomerEmail',
  data() {
    return {
      email: '',
      password: ''

    }
  }
}
</script>