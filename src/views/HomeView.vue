<template>
  <div class="home">
    <div class="row">
      <div class="col justify-content-right">
        <div> {{ introductionText }}</div>
      </div>
      <div class="col">
        <LoginRegisterBox/>
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
    login() {
    },
  }
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