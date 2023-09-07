<template>
 <div class="col"  @keydown.enter="login">
   <div class="col-4" >
     <input type="text" class="form-control" placeholder="e-mail" aria-describedby="addon-wrapping">
   </div>
   <div class="col-4">
     <input type="text" class="form-control" placeholder="parool" aria-describedby="addon-wrapping">
     <br>

   </div>

   <div>
     <div><button type="button" class="btn btn-link">Registreeri</button></div>
     <br>
     <div> <button type="button" class="btn btn-success">Logi sisse</button> </div>
   </div>
 </div>
</template>
<script>
export default {
  name: 'LoginRegisterBox'
}
</script>