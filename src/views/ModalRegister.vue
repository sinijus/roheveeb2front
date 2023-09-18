<template>
      <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </button>

        <!-- Modal -->
        <div class="modal fade justify-content-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn btn-link">Registreeri kasutajaks</button>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <button type="button" class="btn btn-link">Registreeri müüjaks</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'ModalRegister'
}
</script>
<style>
body {
  background-image: url('https://media.istockphoto.com/id/1393465643/photo/empty-wood-table-top-with-blur-fruits-in-basket-supermarket-grocery-store-background.jpg?s=612x612&w=0&k=20&c=0zZVQiy22B0ZrH76_L719EHi3dSwNOfUQ8VOOIiSxDg='); /* Adjust the path to your image */
  background-size: cover; /* Adjust as needed */
  background-repeat: no-repeat; /* Adjust as needed */
  background-position: center center; /* Adjust as needed */
}
</style>