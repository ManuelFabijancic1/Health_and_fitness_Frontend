<template>
<body >
<div id="body2">
  <div class="container">
      <div class="row">
      </div>
          <div class="row">
          </div>

      <div class="row">
          <h2 id="workouttype">  Workout type </h2>
      </div>
  <div id="row1" class="row">
    
     <div  class="btn-group"  data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
         <div class="col">
           
  <input type="radio" v-model="store.workout_type" class="btn-check" value="Athome" name="btnradio" id="btnradio1" autocomplete="off" >
  <label class="btn btn-outline-dark" for="btnradio1">At home</label>
   </div>
<div class="col">
  <input type="radio" v-model="store.workout_type" class="btn-check" name="btnradio" value="Ingym" id="btnradio2" autocomplete="off" checked>
  <label class="btn btn-outline-dark" for="btnradio2">In-gym</label>
</div>

    <div class="col">
      
    </div>
     </div>
   
  
   
    <div class="col">
      
    </div>
     
  </div>
   <div class="row">
      <h2 id="workouttype">  Muscle groups </h2>  
   </div>
 <div id="row3" class="row">
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          
            <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck1" value="arms"  autocomplete="off" >
  <label class="btn btn-outline-dark" for="btncheck1">Arms</label>
            </div>
              <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck2" value="back"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck2">Back</label>
              </div>
                <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck3" value="abs"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck3">Abs</label>
  </div>
    </div>
     </div>
                <div id="row4" class="row">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <div class="col-sm">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck4" value="legs"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck4">Legs</label>
            </div>
              <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck5" value="chest" autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck5">Chest</label>
              </div>  
              <div class="col">
              </div>
                </div>
              
                
               
</div>
  
 
  <div class="row">
      <h2 id="workouttype">  Dificulty </h2>  
   </div>
   <div id="row5" class="row">
       <div class="btn-group" data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
           <div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" value="Beginner" v-model="store.workout_dificulty" autocomplete="off" checked>
  <label class="btn btn-outline-dark" for="btnradio5">Beginner</label>
           </div>
<div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" value="Intermidiate" v-model="store.workout_dificulty" autocomplete="on">
  <label class="btn btn-outline-dark" for="btnradio6">Intermidiate</label>
</div>
<div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio7" value="Advanced" v-model="store.workout_dificulty" autocomplete="off">
  <label class="btn btn-outline-dark" for="btnradio7">Advanced</label>
</div>
</div>
  </div>
  <div id='row6' class="row">
      <div class="col">
          
      </div>
      <div class="col">
          <router-link to="workoutresult" v-on:click.native="build_workout()">
          <button type="button" class="btn btn-danger btn-lg">Create workout</button>
          </router-link>
      </div>
      <div class="col">
          
      </div>
   </div>
</div>
</div>
</body>
</template>
<script>
import store from "@/store";

export default {
    name:"workoutbuilder",
    data() {
    return{ 
      store
      };
       
  },
    
    
 methods: {
   build_workout(){
    

this.store.exercize_name1 = []
this.store.how_to_do_exercize1 = []
this.store.slika_source = []

if(this.store.muscle_groups.includes("arms",[0]))
{
  fetch(`http://localhost:3000/arms/${this.store.workout_type}/${this.store.workout_dificulty}`)
 .then(response => {
 return response.json()
 })
 .then(data => {
 
 
 this.store.map1 = data.map(doc => {

 return {id: doc.id, name1: doc.exercize_name, howto: doc.how_to_do_exercize, type:doc.exercize_type, dificulty: doc.exerciye_dificulty, src1:doc.src}
 
 })
 


this.store.map1.forEach(item => this.store.exercize_name1.push({[item.name1]: item.name1}));
this.store.map1.forEach(item => this.store.how_to_do_exercize1.push({[item.howto]: item.howto}));
this.store.map1.forEach(item => this.store.slika_source.push({[item.src1]: item.src1}));






    
    
 })


 
console.log("arms")
   }


  
 if(this.store.muscle_groups.includes("back",[0]))
{
   fetch(`http://localhost:3000/back/${this.store.workout_type}/${this.store.workout_dificulty}`)
 .then(Response => {
 return Response.json()
 })
 .then(data => {


 this.store.map1 = data.map(doc => {

 return {id: doc.id, name1: doc.exercize_name, howto: doc.how_to_do_exercize, type:doc.exercize_type, dificulty: doc.exerciye_dificulty, src1:doc.src}
 
 })
 


this.store.map1.forEach(item => this.store.exercize_name1.push({[item.name1]: item.name1}));
this.store.map1.forEach(item => this.store.how_to_do_exercize1.push({[item.howto]: item.howto}));
this.store.map1.forEach(item => this.store.slika_source.push({[item.src1]: item.src1}));



 })

console.log("back")
   }



if(this.store.muscle_groups.includes("abs",[0]))
{
  fetch(`http://localhost:3000/abs/${this.store.workout_type}/${this.store.workout_dificulty}`)
 .then(Response => {
 return Response.json()
 })
 .then(data => {
 console.log("Podaci s backenda", data)
 this.store.map1 = data.map(doc => {

 return {id: doc.id, name1: doc.exercize_name, howto: doc.how_to_do_exercize, type:doc.exercize_type, dificulty: doc.exerciye_dificulty, src1: doc.src}
 
 })
 


this.store.map1.forEach(item => this.store.exercize_name1.push({[item.name1]: item.name1}));
this.store.map1.forEach(item => this.store.how_to_do_exercize1.push({[item.howto]: item.howto}));
this.store.map1.forEach(item => this.store.slika_source.push({[item.src1]: item.src1}));



 })

console.log("abs")
   }




  if(this.store.muscle_groups.includes("legs",[0]))
{
  fetch(`http://localhost:3000/legs/${this.store.workout_type}/${this.store.workout_dificulty}`)
 .then(Response => {
 return Response.json()
 })
 .then(data => {
 console.log("Podaci s backenda", data)
 this.store.map1 = data.map(doc => {

 return {id: doc.id, name1: doc.exercize_name, howto: doc.how_to_do_exercize, type:doc.exercize_type, dificulty: doc.exerciye_dificulty, src1:doc.src}
 
 })
 


this.store.map1.forEach(item => this.store.exercize_name1.push({[item.name1]: item.name1}));
this.store.map1.forEach(item => this.store.how_to_do_exercize1.push({[item.howto]: item.howto}));
this.store.map1.forEach(item => this.store.slika_source.push({[item.src1]: item.src1}));



 })



   }


 if(this.store.muscle_groups.includes("chest",[0]))
{
  fetch(`http://localhost:3000/chest/${this.store.workout_type}/${this.store.workout_dificulty}`)
 .then(Response => {
 return Response.json()
 })
.then(data => {
 console.log("Podaci s backenda", data)
 this.store.map1 = data.map(doc => {

 return {id: doc.id, name1: doc.exercize_name, howto: doc.how_to_do_exercize, type:doc.exercize_type, dificulty: doc.exerciye_dificulty, src1:doc.src}
 
 })
 


this.store.map1.forEach(item => this.store.exercize_name1.push({[item.name1]: item.name1}));
this.store.map1.forEach(item => this.store.how_to_do_exercize1.push({[item.howto]: item.howto}));
this.store.map1.forEach(item => this.store.slika_source.push({[item.src1]: item.src1}));



 })


   }





 },

 }
}


</script>
<style  scoped>
#workouttype{
text-align: left;
color: white;
margin-top: 3%;
margin-bottom: 3%;
}
#body2{
background-color:#5E5E5E ;
}
#row1{
    margin-left: -14%;
    
}
#row2{
    margin-left: -13%;
    
}
#row3{
    margin-left: -16%;
    margin-top: 1%;
margin-bottom: 4%;
}
#row4{
margin-left: -16%;
margin-bottom: 1%;
}
#row5{
margin-left: -14.5%;
margin-bottom: 7%;
 
}
#row6{
   margin-bottom: 4%; 
}
#btn{
    color: white;
}

</style>
