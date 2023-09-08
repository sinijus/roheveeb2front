<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_roheveeb.png" height="200">
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

export default {
  name: 'HomeView',
  components: {
    LoginRegisterBox
  },
  data() {
    return {
      introductionText: HOME_VIEW_INTRODUCTION
    }
  },
  methods: {
    login() {

    }
  }
}

</script>
