<template>
<div id="Pocetna_stranica">
  <div class="home" >
    
 <div class="row">
 <div class="col-2"><!--useless--></div>
 <div class="col-8">
   <center>
<router-link >
<button id="nextbutton" type="button" class="btn btn-primary btn-lg">Next</button></router-link>


</center>
 </div>
 <div class="col-2">
 <!--dont matter-->
 </div>
 </div>
 </div>
</div>
 </template>

<script>

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style >
#Pocetna_stranica{
  background-color: #2c3e50;
}
</style>