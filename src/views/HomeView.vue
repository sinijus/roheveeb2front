<template>
  <div class="page">
    <div class="row">
      <div class="col justify-content-right">
        <div class="product-item"> {{ introductionText }}</div>
      </div>
      <div class="col">
        <LoginRegisterBox @event-udpate-nav-menu="handleNavMenuUpdate()"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {HOME_VIEW_INTRODUCTION} from "@/assets/text/text.storage";
import LoginRegisterBox from "@/components/LoginRegisterBox.vue";
import ModalRegister from "@/components/modal/ModalRegister.vue";

export default {
  name: 'HomeView',
  components: {
    ModalRegister,
    LoginRegisterBox
  },
  data() {
    return {
      introductionText: HOME_VIEW_INTRODUCTION
    }
  },
  methods: {
    handleNavMenuUpdate() {
      this.$emit('event-update-nav-menu')
    },
  }
}

</script>



