<template>
  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">E-maili aadress</label>
          <input type="email" class="form-control" id="insertCompanyemail" aria-describedby="insertCompanyemail" placeholder="Sisesta firma e-mail*">
          <div id="insertCompanyemail"></div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'registerNewCompanyEmail',
  data() {
    return {
      email: '',
      password: ''

    }
  }
}
</script>