<template>
  <div class="container">
  <div class="row">
    <div class="col">
      <h3 id="Naslov1">You should wake up in one of these intervals:</h3>
    </div>
   
    <div class="col"></div>
  </div>
         <div id="row2" class="row">
             <div class="col">
               <h1><span class="badge bg-secondary">{{this.variables.interval1_hours}}:{{this.variables.interval1_mins}} </span></h1>
             </div>
             <div class="col">
                  <h1><span class="badge bg-secondary">{{ this.variables.interval2_hours}}:{{this.variables.interval2_mins}} </span></h1>
             </div>
             <div class="col">
                  <h1><span class="badge bg-secondary">{{this.variables.interval3_hours}}:{{this.variables.interval3_mins}} </span></h1>
             </div>
              <div class="col">
                   <h1><span class="badge bg-secondary">{{this.variables.interval4_hours}}:{{this.variables.interval4_mins}} </span></h1>
              </div>
          </div>
           <div id="row3" class="row">
               <div class="col"></div>
          
               <div class="col"><router-link to="/"> <button class="btn btn-primary" type="button">Go back</button>
               </router-link>
               </div>
               <div class="col"></div>
           </div>

</div>
</template>

<script>

import variables from '@/variables.js'

export default {
  
    data() {
    return{ 
      variables,
      
      };
    }, 

 


    }

</script>

<style scoped>
#Naslov1{
    color:aliceblue
}
#row2{
    margin-top:4%
}
#row3{
    margin-top:14%
}
</style>


