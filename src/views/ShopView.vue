<template>
  <div class="Pood">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>E-pood</h1>
        </div>
        <div class="col">
          <font-awesome-icon :icon="['fas', 'user']" size="lg" @click="goToProfile" type="button"
                             style="margin-right: 10px;"/>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="goToCart" type="button" size="lg"/>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Maakond
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Müüja
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Juurviljad ja köögiviljad
          </button>
          <button class="btn btn-secondary dropdown-toggle myDropdown" type="button">
            Tootevalik
          </button>
        </div>
        <!--        <div v-for="(item, index) in items" :key="index" class="container text-center">-->
        <!--        //siia tuleb v-for loop kui andmed käes backist-->
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
import router from "@/router";

export default {
  name: "ShopView",

  methods: {

    goToProfile() {
      router.push({name: 'profileRoute'})
    },
    goToCart() {
      router.push({name: 'cartRoute'})
    },
  }
}


</script>

<!--//v-for loopi jaoks-->
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      items: [-->
<!--        { column1: 'Column 1A', column2: 'Column 2A', column3: 'Column 3A' },-->
<!--        { column1: 'Column 1B', column2: 'Column 2B', column3: 'Column 3B' },-->
<!--        { column1: 'Column 1C', column2: 'Column 2C', column3: 'Column 3C' },-->
<!--        // Add more items as needed-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<style>

</style>

