<style scoped>

fieldset {
  align-content: center;
}


form {
  justify-content: center;

}
.custom-dropdown-toggle {
  background-color: white;
  color: black;
}

.custom-dropdown-menu {
  background-color: white;
  color: black;
}
</style>

<script setup>

import RegisterNewCustomerEmail from "@/views/RegisterNewCustomerEmail.vue";


</script>

<template>
  <registerNewCustomerEmail/>

  <div>
    <div class="centered-container">
      <div>
        <form class="row row-cols-6 mt-4">
            <div class="mb-3">
              <label for="passwordField" class="form-label">Sisesta parool*</label>
              <input type="password" class="form-control" id="passwordField" placeholder="Parool*">
            </div>
            <div class="mb-3">
              <label for="confirmPCustomerasswordField" class="form-label">Kinnita parool*</label>
              <input type="password" class="form-control" id="confirmCustomerPasswordField" placeholder="Parool uuesti*">
          </div>
        </form>
      </div>
      </div>
  </div>


    <div>
      <div class="centered-container">
        <div>
          <form class="row row-cols-6 mt-4">
            <div class="mb-3">
              <label for="nameField" class="form-label">Sisesta eesnimi*</label>
              <input type="text" class="form-control" id="nameField" placeholder="Nimi*">

              <label for="insertNewCustomerFamilyField" class="form-label">Sisesta perenimi*</label>
              <input type="text" class="form-control" id="insertNewCustomerFamilyname" placeholder="Perekonnanimi*">
            </div>
          </form>
        </div>
      </div>
  </div>

  <div>
    <form class="row justify-content-center">
      <div class="col col-3 mt-3">
        <div class="mb-3">
          <label for="newCustomerPhoneNumber" class="form-label">Telefoninumber</label>
          <input type="number" class="form-control" id="newCustomerPhoneNumber" aria-describedby="insertNewCustomerPhoneNumber" placeholder="+372 xx xxx xxx)">
          <div id="insertNewCustomerPhoneNumber"></div>
        </div>
      </div>
    </form>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-1 mt-5">
      <div class="dropdown">
        <button class="btn btn-secondary custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Maakond
        </button>
        <ul class="dropdown-menu custom-dropdown-menu">
          <li><button class="dropdown-item" type="button">Harjumaa</button></li>
          <li><button class="dropdown-item" type="button">Läänemaa</button></li>
          <li><button class="dropdown-item" type="button">Ida-Virumaa</button></li>
        </ul>
      </div>
    </div>

    <div class="col-md-5">
      <div class="centered-container">
        <div>
          <form class="row row-cols-6 mt-1">
            <div class="mb-3">
              <label for="newCustomerPostalCodeField" class="form-label">Sisesta postiindeks*</label>
              <input type="number" class="form-control" id="newCustomerPostalCodeField" placeholder="Indeks">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <br>
  <br>

<div>
  <button type="button" class="btn btn-outline-success" id="tagasiButton">Tagasi</button>
  <button type="button" class="btn btn-success">Registreeri</button>

  <script>
    document.getElementById("tagasiButton").addEventListener("click", function() {
      // Redirect the user to the main page
      window.location.href = "/"; // Replace with your main page URL
    });
  </script>

</div>
</template>