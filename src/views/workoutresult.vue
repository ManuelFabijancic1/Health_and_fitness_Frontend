<template>
  <div class="container">
  <div class="row">
    <div class="col">
     <div id="vjezbe" class="card" style="width: 18rem;">
  <img src="@/assets/Pushups.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{String(this.store.exercize_name1[0])}}</h5>
    <p class="card-text">A basic push up is an effective way to strengthen the chest and arm muscles and can be easily scaled as you get stronger.</p>
  
  </div>
</div>
    </div>
    <div class="col">
       <div id="vjezbe" class="card" style="width: 18rem;">
  <img src="@/assets/Plank.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{String(this.store.exercize_name1[1])}}</h5>
    <p class="card-text">The plank is an essential exercise if you want to build a strong core. </p>
    
  </div>
</div>
    </div>
      <div class="col">
       <div id="vjezbe" class="card" style="width: 18rem;">
  <img src="@/assets/Lunges.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{String(this.store.exercize_name1[2])}}</h5>
    <p class="card-text">Lunges are an easy and efficient exercise to help build strength in your quadriceps, glutes, hamstrings, calves, and core.</p>

  </div>
</div>
    </div>
  </div>
            <div id="row2" class="row">
                 <div class="col">
                     <div id="vjezbe" class="card" style="width: 18rem;">
                    <img src="@/assets/Glutebridge.png" class="card-img-top" alt="...">
                     <div class="card-body">
                     <h5 class="card-title">{{String(this.store.exercize_name1[3])}}</h5>
                     <p class="card-text">The glute bridge is a simple bodyweight exercise, perfect for beginners who want to strengthen their glutes and
                        hamstrings</p>
    
                    </div>
                    </div>
                 </div>
                 <getAll v-for="vjezba in vjezbe" :key="vjezba.id" :info="vjezba"/>  
                     <div class="col">
                         <div id="vjezbe" class="card" style="width: 18rem;">
                          <img src="@/assets/Crunches.png" class="card-img-top" alt="...">
                           <div class="card-body">
                             <h5 class="card-title">{{String(this.store.exercize_name1[4])}}</h5>
                             <p class="card-text">Crunches are an extremely effective compound-muscle ab exercise. When done correctly, they target your upper abdominal, lower abdominal,oblique, and lower back muscles.</p>
    
                             </div>
                              </div>
                     </div>
                        <div class="col">
                           
                         </div>
                         
             </div>
</div>
</template>

<script>
import store from "@/store";
import { vjezbe } from '@/services';
import getAll from '@/components/getAll.vue'

export default {
  name: 'workout results',  
    components: {
    getAll
  },
  data: function () {

    return  {
      vjezba: []
    }
  },
  mounted() {
    this.build_workout();
  },
  methods: {
  async build_workout() {
    this.vjezba = []
    this.vjezba = await vjezbe.build_workout()
    console.log(this.vjezba)
  },
},
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
</style>