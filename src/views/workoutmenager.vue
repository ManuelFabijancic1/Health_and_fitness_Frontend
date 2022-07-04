<template>
 <div class="container">
  <div class="row">
    <div class="col">

    <h3 id="Naslov1"> <p>Username: {{ String(store.currentUser) }}</p></h3>
    </div>
    <div class="col">
    
    </div>
    <div class="col">
    
    </div>
    <div class="col">
    
    </div>
  </div>
 <div id="row2" class="row">
    <div class="col">
  <router-link to=""  v-on:click.native="showworkout()">
  <div id="workoutplan" class="card" style="width: 18rem;">
  <img src="@/assets/workoutplanpicature.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-text">Workout 1</h3>
  </div>
</div>
  </router-link>
</div>
<div class="col">
    
    </div>
    <div class="col">
    <div class="displaycomponents">
                <p> {{store.workout_type}} </p>
                
              </div>
    </div>
 
 </div>
</div>
</template>
<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
    name:"workoutmenager",
     data(){
   return {
    store
   };
  },
  methods: {
    showworkout(){
        console.log("start");

        this.store.nameuser=[],
        
        db.collection("users").where("id", "==", String(store.currentUser))
                        .get()
                        .then((query) => {           
                              query.forEach((doc) => {
                                    const data = doc.data();
                                        this.builder.nameuser.push(
                                            data.name,
                                        );
                              });
                        });
        },
    }
}
</script>

<style scoped>
#Naslov1{
  color: aliceblue;
  margin-left: -15%;
}

#workoutplan{
 background-color:#2C2C2C ;
 color: aliceblue;
 margin-top: 3%;
 margin-bottom: 3%;
}
#row2{
  background-color: #484747;
}
</style>
