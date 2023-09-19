<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
       Toode on ostukorvi lisatud
      </template>

      <template #body>
        <div class="row justify-content-center">
          <div class="col col-5">
            <div class="input-group mb-3">
              <button type="button" class="btn btn-outline-success">Jätka ostlemist</button>
            </div>
            <div>
              <button type="button" class="btn btn-outline-success">Mine ostukorvi</button>
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
  name: 'AddItemsToCart',
  components: {Modal}
}
</script>