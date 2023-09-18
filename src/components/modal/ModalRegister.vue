<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
        Registreerimine
      </template>

      <template #body>
        <button type="button" class="btn btn-link">Kliendiks</button>
        <button type="button" class="btn btn-link">Müüjaks</button>
      </template>

      <template #footer>

      </template>


    </Modal>

  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'ModalRegister',
  components: {Modal}
}
</script>
