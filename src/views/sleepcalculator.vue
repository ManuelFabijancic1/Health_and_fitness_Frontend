<template>
  <div class="container">
  <div class="row">
    <div class="col"><h3 id="Naslov1">When do you want to wake up?</h3></div>

    <div class="col"></div>
    <div class="col"><h3 id="Naslov1">When do you want to go to sleep?</h3></div>
  </div>
    <div id='row2' class="row">
         <div class="col"><div>
         <input type="number" min="0" max="23" placeholder="7"  v-model="store.wakeuphours" >
         <input type="number" min="0" max="59" placeholder="00" v-model="store.wakeupmins">
         </div>
         </div>
         <div class="col"></div>
         <div class="col"><div>
         <input type="number" min="0" max="23" placeholder="22" v-model="store.gotosleephours">:
         <input type="number" min="0" max="59" placeholder="00" v-model="store.gotosleepmins">
         </div></div>
    </div>
      <div id='row3' class="row">
         <div class="col"><router-link to="bedtime"  v-on:click.native="bedtime_calculator()"><button class="btn btn-primary" type="button">Calculate bedtime</button></router-link></div>
         <div class="col"></div>
         <div class="col"><router-link to="wakeuptime" v-on:click.native="wake_up_time_calculation()"><button class="btn btn-primary" type="button">Calculate wake-up time</button></router-link></div>
         
      </div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
    name:"sleepcalculator",
    data() {
    return{ 
      store,
      
      
      
      };
    },

methods: {
  wake_up_time_calculation(){
    console.log
    //prvi interval
    this.store.interval1_hours=Number(this.store.gotosleephours)+6
    if(this.store.interval1_hours>24){
      this.store.interval1_hours=this.store.interval1_hours-24
    }
    this.store.interval1_mins=this.store.gotosleepmins
  
//drugi interval
  if( Number(this.store.interval1_mins)+30>59){
    this.store.interval2_hours=Number(this.store.interval1_hours)+2
    this.store.interval2_mins=Number(this.store.interval1_mins)+30
    this.store.interval2_mins=this.store.interval2_mins%60
  }
  else{
    this.store.interval2_hours=Number(this.store.interval1_hours)+1
    this.store.interval2_mins=Number(this.store.interval1_mins)+30
    //treci interval
  }
  if( Number(this.store.interval2_mins)+30>59){
    this.store.interval3_hours=Number(this.store.interval2_hours)+2
    this.store.interval3_mins=Number(this.store.interval2_mins)+30
    this.store.interval3_mins=this.store.interval3_mins%60
  }
  else{
    this.store.interval3_hours=Number(this.store.interval2_hours)+1
    this.store.interval3_mins=Number(this.store.interval2_mins)+30
  }

  //cetvrti interval
    if( Number(this.store.interval3_mins)+30>59){
    this.store.interval4_hours=Number(this.store.interval3_hours)+2
    this.store.interval4_mins=Number(this.store.interval3_mins)+30
    this.store.interval4_mins=this.store.interval4_mins%60
  }
  else{
    this.store.interval4_hours=Number(this.store.interval3_hours)+1
    this.store.interval4_mins=Number(this.store.interval3_mins)+30
  }


  },


bedtime_calculator(){
 //prvi interval
if(Number(store.wakeuphours)-9<0){
  this.store.bedtimeinterval1_hours=24-(9-Number(this.store.wakeuphours))
   this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval2_hours)-24
  this.store.bedtimeinterval1_mins=this.store.wakeupmins
}
else{
  this.store.bedtimeinterval1_hours=Number(store.wakeuphours)-9
   this.store.bedtimeinterval1_mins=store.wakeupmins
}
//drugi interval

if( Number(this.store.bedtimeinterval1_mins)+30>59){
  
this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval1_hours)+2
if(this.store.bedtimeinterval2_hours>=24)
{
  this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval2_hours)-24
}
    this.store.bedtimeinterval2_mins=Number(this.store.bedtimeinterval1_mins)+30
    this.store.bedtimeinterval2_mins=this.store.bedtimeinterval2_mins%60
}
else{
  this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval1_hours)+1
    this.store.bedtimeinterval2_mins=Number(this.store.bedtimeinterval1_mins)+30
}

//treci interval

if( Number(this.store.bedtimeinterval2_mins)+30>59){
  
this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval2_hours)+2
if(this.store.bedtimeinterval3_hours>=24)
{
  this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval3_hours)-24
}
    this.store.bedtimeinterval3_mins=Number(this.store.bedtimeinterval2_mins)+30
    this.store.bedtimeinterval3_mins=this.store.bedtimeinterval3_mins%60
}
else{
  this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval2_hours)+1
    this.store.bedtimeinterval3_mins=Number(this.store.bedtimeinterval2_mins)+30
}
//cetvrti interval

if( Number(this.store.bedtimeinterval3_mins)+30>59){
  
this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval3_hours)+2
if(this.store.bedtimeinterval4_hours>=24)
{
  this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval4_hours)-24
}
    this.store.bedtimeinterval4_mins=Number(this.store.bedtimeinterval3_mins)+30
    this.store.bedtimeinterval4_mins=this.store.bedtimeinterval4_mins%60
}
else{
  this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval3_hours)+1
    this.store.bedtimeinterval4_mins=Number(this.store.bedtimeinterval3_mins)+30
}

}
 }
}
</script>
<style scoped>
#Naslov1{
  color: aliceblue;
}
#row2{
  margin-top:4%;
  
}
#row3{
  margin-top:4%;
}
</style>