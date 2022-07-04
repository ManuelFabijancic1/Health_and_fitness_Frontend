<template>
 <div class="container">
  <div class="row">
    <div v-if="store.currentUser && this.store.brojac==0 " class="col">
    <h3 id="Naslov1">SELECT WORKOUT:</h3>
    </div>
   
      <div class="col"></div>
      <div v-if="!store.currentUser" class="col">
    <h1 id="signup1">You are not signed-in:</h1>
    </div>
    
     <div class="col"></div>
    
    
  </div>
 <div v-if="store.currentUser" id="row2" class="row">
    <div v-if="this.store.brojac==0" class="col">
  <router-link  to="workouttracker" v-on:click.native="showworkout()">
  <div id="workoutplan" class="card" style="width: 18rem;">
  <img src="@/assets/workoutplanpicature.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-text">Workout 1</h3>
  </div>
</div>
  </router-link>
</div>
<div v-if="this.store.brojac==1 || this.store.brojac==2 " class="col">
    <h1>You have to save a workout first.</h1>
    </div>
    <div class="col">
    
    </div>
 
 </div>

<div v-if="!store.currentUser" class="row">
<div class="col">
  <h2 id="signup1">Dont have an account?</h2>
          <router-link id="link" to="/signup"><button id="signupbut" type="button" class="btn btn-dark">
              Signup
            </button></router-link>
    
    </div>
    <div class="col">
    
    </div>
    <div class="col">
    <h2 id="login1">Already have an account ?</h2>
          <router-link to="/login"><button type="button" class="btn btn-dark">
              Login
            </button></router-link>
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
        this.store.descuser=[],

        this.store.url_slika_firebase1=[],
        this.store.url_slika_firebase2=[],
        this.store.url_slika_firebase3=[],
        this.store.url_slika_firebase4=[],
        this.store.url_slika_firebase5=[],
        this.store.url_slika_firebase6=[],
        this.store.url_slika_firebase7=[],
        this.store.url_slika_firebase8=[],
        this.store.url_slika_firebase9=[],
        this.store.url_slika_firebase10=[],
        this.store.url_slika_firebase11=[],
        this.store.url_slika_firebase12=[],
        this.store.url_slika_firebase13=[],
        this.store.url_slika_firebase14=[],
        this.store.url_slika_firebase15=[],
        this.store.url_slika_firebase16=[],
        this.store.url_slika_firebase17=[],
        this.store.url_slika_firebase18=[],
        this.store.url_slika_firebase19=[],
        this.store.url_slika_firebase20=[],
        this.store.url_slika_firebase21=[],
        this.store.url_slika_firebase22=[],
        this.store.url_slika_firebase23=[],
        this.store.url_slika_firebase24=[],
        this.store.url_slika_firebase25=[],
        
        
        
        db.collection("users").where("id", "==", String(store.currentUser))
                        .get()
                        .then((query) => {           
                              query.forEach((doc) => {
                                    const data = doc.data();
                                        this.store.nameuser.push(
                                            data.name,
                                        );
                                
                                        this.store.descuser.push(
                                            data.desc,
                                        );  
                                        this.store.url_slika_firebase1.push(
                                            data.url0,
                                        );  
                                        this.store.url_slika_firebase2.push(
                                            data.url1,
                                        );  
                                        this.store.url_slika_firebase3.push(
                                            data.url2,
                                        );  
                                        this.store.url_slika_firebase4.push(
                                            data.url3, 
                                        );  
                                        this.store.url_slika_firebase5.push(
                                           data.url4,
                                        );  
                                        this.store.url_slika_firebase6.push(
                                         data.url5,
                                        );  
                                        this.store.url_slika_firebase7.push(
                                           
                                            data.url6,
                                        );  
                                        this.store.url_slika_firebase8.push(
                                          data.url7, 
                                        );  
                                        this.store.url_slika_firebase9.push(
                                         data.url8,
                                        );  
                                        this.store.url_slika_firebase10.push(
                                            data.url9, 
                                        );  
                                        this.store.url_slika_firebase11.push(
                                           data.url10,
                                        );  
                                        this.store.url_slika_firebase12.push(
                                           data.url11,
                                        );  
                                        this.store.url_slika_firebase13.push(
                                           data.url12, 
                                           
                                        );  
                                        this.store.url_slika_firebase14.push(
                                            data.url13,
                                        );  
                                        this.store.url_slika_firebase15.push(
                                            data.url14, 
                                        );  
                                        this.store.url_slika_firebase16.push(
                                           data.url15,
                                        );  
                                        this.store.url_slika_firebase17.push(
                                            data.url16,
                                        );  
                                        this.store.url_slika_firebase18.push(
                                            data.url17,
                                        );  
                                        this.store.url_slika_firebase19.push(
                                           data.url18,
                                        );  
                                        this.store.url_slika_firebase20.push(
                                            data.url19,
                                        );  
                                        this.store.url_slika_firebase21.push(
                                           data.url20, 
                                        );  
                                        this.store.url_slika_firebase22.push(
                                            data.url21,
                                        );  
                                        this.store.url_slika_firebase23.push(
                                            data.url22,
                                        );  
                                        this.store.url_slika_firebase24.push(
                                           data.url23,
                                        );  
                                        this.store.url_slika_firebase25.push(
                                           data.url24,
                                        );  
                              });
                        });

 

console.log(this.store.url_slika_firebase25)
                        
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
