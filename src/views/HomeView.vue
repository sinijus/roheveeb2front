<template>
  <div class="page">
    <div class="row">
      <div class="col justify-content-right">
        <div class="introduction-text"> {{ introductionText }}</div>
      </div>
      <div class="col">
        <LoginRegisterBox @event-udpate-nav-menu="handleNavMenuUpdate()"/>
      </div>
    </div>
    </div>

   <div class="adjustable-image"><img src="https://media.voog.com/0000/0048/2898/photos/porgand.png">"></div>

</template>

<script>
// @ is an alias to /src
import {HOME_VIEW_INTRODUCTION} from "@/assets/text/text.storage";
import LoginRegisterBox from "@/components/LoginRegisterBox.vue";
import ModalRegister from "@/components/modal/ModalRegister.vue";
import ImageInput from "@/views/ImageInput.vue";
import ContactTextBox from "@/views/ContactTextBox.vue";

export default {
  name: 'HomeView',
  components: {
    ContactTextBox,
    ImageInput,
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



