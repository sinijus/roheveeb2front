<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_roheveeb.png" height="200">
    <div class="row">
      <div class="col">
        {{ introductionText }}
      </div>
      <div class="col">
        RIGHT
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {HOME_VIEW_INTRODUCTION} from "@/assets/text.storage";

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      introductionText: HOME_VIEW_INTRODUCTION
    }
  },
}

</script>
