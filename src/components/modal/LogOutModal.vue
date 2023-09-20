<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
        Kas oled kindel?
      </template>

      <template #body>
        <div class="row justify-content-center">
          <div class="col col-5">
            <div class="input-group mb-3">
              <button type="button" class="btn btn-outline-success" @click="logOut">Logi välja</button>
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
import router from "@/router";

export default {
  name: "LogOutModal",
  components: {Modal},

  methods: {
    logOut() {
      sessionStorage.clear()
      this.isLoggedIn = false
      this.isAdmin = false
      this.isCompany = false
      router.push({name: 'homeRoute'})

      this.$refs.modalRef.closeModal();
    },
  },
}
</script>

<style scoped>

</style>