<template>
  <div>
    <Modal close-button-name="Sulge" ref="modalRef">
      <template #header>
       Toode on ostukorvi lisatud
      </template>

      <template #body>
        <div class="row justify-content-center">
          <div class="col col-5">
            <div>
              <a href="/shop" class="btn btn-outline-success m-2">Jätka ostlemist</a>
              <button type="button" class="btn btn-success" @click="goToCart">Mine ostukorvi</button>
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
  name: 'AddItemsToCart',
  components: {Modal},

  methods: {
    goToShopView() {
      router.push({name: 'shopRoute'})
    },
    goToCart() {
      router.push({name: 'cartRoute'})
    },
  },
}
</script>