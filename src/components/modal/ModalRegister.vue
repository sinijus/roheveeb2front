<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
        Registreerimine
      </template>

      <template #body>
        <button type="button" class="btn btn-link" @click="goToProfileRegister">Kliendiks</button>
        <button type="button" class="btn btn-link" @click="goToCompanyRegister">Müüjaks</button>
      </template>

      <template #footer>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'ModalRegister',
  components: {Modal},

  methods: {

    goToProfileRegister() {
      router.push({name: 'registerCustomerRoute'})
    },
    goToCompanyRegister() {
      router.push({name: 'registerCompanyRoute'})
    },
  }
}
</script>
