<template>
  <div class="container">
  <div class="row">
    <div class="col">
     <div v-if="JSON.stringify(this.store.exercize_name1[0])!== undefined"  id="vjezbe" class="card" style="width: 26rem;">
  <img v-bind:src="`${String(Object.values(this.store.slika_source[0]))}`"  class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">{{String(Object.values(this.store.exercize_name1[0]))}}</h5>
    <p class="card-text">{{String(Object.values(this.store.how_to_do_exercize1[0]))}}</p>
  
  </div>
</div>
    </div>
    <div class="col">
       <div v-if="JSON.stringify(this.store.exercize_name1[1])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
  <img v-bind:src="`${String(Object.values(this.store.slika_source[1]))}`" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">{{String(Object.values(this.store.exercize_name1[1]))}}</h5>
    <p class="card-text">{{String(Object.values(this.store.how_to_do_exercize1[1]))}}</p>
    
  </div>
</div>
    </div>
      <div class="col">
       <div v-if="JSON.stringify(this.store.exercize_name1[2])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
  <img v-bind:src="`${String(Object.values(this.store.slika_source[2]))}`"  class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">{{String(Object.values(this.store.exercize_name1[2]))}}</h5>
    <p class="card-text">{{String(Object.values(this.store.how_to_do_exercize1[2]))}}</p>

  </div>
</div>
    </div>
  </div>
            <div id="row2" class="row">
                 <div class="col">
                     <div v-if="JSON.stringify(this.store.exercize_name1[3])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                    <img v-bind:src="`${String(Object.values(this.store.slika_source[3]))}`"  class="card-img-top" >
                     <div class="card-body">
                     <h5 class="card-title">{{String(Object.values(this.store.exercize_name1[3]))}}</h5>
                     <p class="card-text">{{String(Object.values(this.store.how_to_do_exercize1[3]))}}</p>
    
                    </div>
                    </div>
                 </div>
                
                     <div class="col">
                         <div v-if="JSON.stringify(this.store.exercize_name1[4])!== undefined"  id="vjezbe"  class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values(this.store.slika_source[4]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values(this.store.exercize_name1[4]))}}</h5>
                             <p class="card-text">{{String(Object.values(this.store.how_to_do_exercize1[4]))}}</p>
    
                             </div>
                              </div>
                     </div>
                        <div class="col">
                             <div v-if="JSON.stringify(this.store.exercize_name1[5])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[5]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[5]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[5]))}}</p>
                           </div>
                         </div>
             </div>
</div>
<div id="row2" class="row">
<div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[6])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[6]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[6]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[6]))}}</p>
                           </div>
                         </div>
</div>
<div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[7])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[7]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[7]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[7]))}}</p>
                           </div>
                         </div>
</div>
<div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[8])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[8]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[8]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[8]))}}</p>
                           </div>
                         </div>
</div>


</div>









<div id="row2" class="row">
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[9])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[9]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[9]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[9]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">

<div v-if="JSON.stringify(this.store.exercize_name1[10])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[10]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[10]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[10]))}}</p>
                           </div>
                         </div>
 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[11])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[11]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[11]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[11]))}}</p>
                           </div>
                         </div>

 </div>

</div>






<div id="row2" class="row">
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[12])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[12]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[12]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[12]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[13])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[13]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[13]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[13]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[14])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[14]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[14]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[14]))}}</p>
                           </div>
                         </div>
  
 </div>

</div>








<div id="row2" class="row">
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[15])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[15]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[15]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[15]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[16])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[16]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[16]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[16]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[17])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[17]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[17]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[17]))}}</p>
                           </div>
                         </div>
  
 </div>

</div>










<div id="row2" class="row">
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[18])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[18]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[18]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[18]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[19])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[19]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[19]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[19]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[20])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[20]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[20]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[20]))}}</p>
                           </div>
                         </div>
  
 </div>

</div>








<div id="row2" class="row">
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[21])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[21]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[21]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[21]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[22])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[22]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[22]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[22]))}}</p>
                           </div>
                         </div>

 </div>
 <div class="col">
<div v-if="JSON.stringify(this.store.exercize_name1[23])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[23]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[23]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[23]))}}</p>
                           </div>
                         </div>
  
 </div>

</div>

<div id="row2" class="row">
<div class="col">

  <div v-if="JSON.stringify(this.store.exercize_name1[24])!== undefined" id="vjezbe" class="card" style="width: 26rem;">
                          <img v-bind:src="`${String(Object.values( this.store.slika_source[24]))}`"  class="card-img-top" >
                           <div class="card-body">
                             <h5 class="card-title">{{String(Object.values( this.store.exercize_name1[24]))}}</h5>
                             <p class="card-text">{{String(Object.values( this.store.how_to_do_exercize1[24]))}}</p>
                           </div>
                         </div>
 </div>
</div>
<div id="savebuild" class="col-sm">
        <router-link to="" v-on:click.native="savebuild()">
          <button type="button" class="btn btn-primary btn-lg">
            Save workout
          </button></router-link>
        
      </div>
</div>













  
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
export default {
    name:"workoutresult",
     data() {
    return{ 
      store
      };
       
  },
  methods: {
    savebuild() {
      
      db.collection("users").doc(String(store.currentUser)).set({
        id: String(store.currentUser),
        name: store.exercize_name1,
        
        desc: store.how_to_do_exercize1
        
      });
      console.log("it's happening!");
    },


  created(){
 
 let i=0;
 while(i<25){

i++
 }
  }
    }
  }
</script>

<style scoped>
#vjezbe{
    background-color:#2C2C2C;
    color:white ;
}
#row2{
margin-top: 7%;
}
#col{
  margin-left: 7%;
}
</style>