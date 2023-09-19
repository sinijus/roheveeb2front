<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
        Lisa uus tootetüüp
      </template>

      <template #body>
        <div class="row justify-content-center">
          <div class="col col-5">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Lisa uus">
              <button type="button" class="btn btn-outline-success">Lisa</button>
            </div>
          </div>
        </div>
      </template>

      <template #footer>

      </template>
    </Modal>
  </div>


</template>







<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "AddType",
  components: {Modal}
}
</script>



<style scoped>

</style>