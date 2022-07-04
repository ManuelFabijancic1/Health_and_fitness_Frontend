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
<div id="savebuild" v-if="store.currentUser"   class="col-sm">
        <router-link to="" v-on:click.native="savebuild()">
          <button type="button" class="btn btn-dark">
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
 methods:{
   savebuild(){
     
      if(this.store.brojac==1 || this.store.brojac==2){
        this.store.brojac=0
      db.collection("users").doc(String(store.currentUser)).set({
        id: String(store.currentUser),
        name: store.exercize_name1,
        
        desc: store.how_to_do_exercize1,
        url0: String(Object.values( this.store.slika_source[0]||undefined)),
        url1: String(Object.values( this.store.slika_source[1]||undefined)),
         url2: String(Object.values( this.store.slika_source[2]||undefined)),
          url3: String(Object.values( this.store.slika_source[3]||undefined)),
           url4: String(Object.values( this.store.slika_source[4]||0)),
            url5: String(Object.values( this.store.slika_source[5]||0)),
             url6: String(Object.values( this.store.slika_source[6]||0)),
              url7: String(Object.values( this.store.slika_source[7]||0)),
               url8: String(Object.values( this.store.slika_source[8]||0)),
                url9: String(Object.values( this.store.slika_source[9]||0)),
                 url10: String(Object.values( this.store.slika_source[10]||0)),
                  url11: String(Object.values( this.store.slika_source[11]||0)),
                   url12: String(Object.values( this.store.slika_source[12]||0)),
                    url13: String(Object.values( this.store.slika_source[13]||0)),
                     url14: String(Object.values( this.store.slika_source[14]||0)),
                      url15: String(Object.values( this.store.slika_source[15]||0)),
                       url16: String(Object.values( this.store.slika_source[16]||0)),
                        url17: String(Object.values( this.store.slika_source[17]||0)),
                         url18: String(Object.values( this.store.slika_source[18]||0)),
                          url19: String(Object.values( this.store.slika_source[19]||0)),
                           url20: String(Object.values( this.store.slika_source[20]||0)),
                            url21: String(Object.values( this.store.slika_source[21]||0)),
                             url22: String(Object.values( this.store.slika_source[22]||0)),
                              url23: String(Object.values( this.store.slika_source[23]||0)),
                               url24: String(Object.values( this.store.slika_source[24]||0))
        
        
      });
      alert("Workout saved")
      console.log("it's happening!");
      }
      else{
      
      alert("Workout already saved!!!")
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
#savebuild{
margin-top: 5%;
margin-bottom: 7%;
}
</style>