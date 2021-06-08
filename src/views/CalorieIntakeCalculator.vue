<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <div class="row">
          <h1 class="title">Weight gain/loss</h1>

          <select
            id="weightgainloss"
            name="weight"
            form="form"
            v-model="variables.weight_gain_loss"
          >
            <option value="1">Loss</option>
            <option value="2">Gain</option>
          </select>
        </div>

        <div class="row">
          <h1 class="title">Gender</h1>

          <select
            id="Gender"
            name="gender"
            form="form"
            v-model="variables.gender"
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>

        <div class="row">
          <h1 class="title">Activity</h1>

          <select
            id="Activity"
            name="activity"
            form="form"
            v-model="variables.activity"
          >
            <option value="1">Light</option>
            <option value="2">Average</option>
            <option value="3">Heavy</option>
          </select>
        </div>

        <div class="row">
          <h1 class="title">Height</h1>

          <input type="number" min="0" max="300" v-model="variables.height" />
        </div>

        <div class="row">
          <h1 class="title">weight</h1>

          <input type="number" min="0" max="300" v-model="variables.weight" />
        </div>

        <div class="row">
          <h1 class="title">Age</h1>

          <input type="number" min="0" max="120" v-model="variables.age" />
        </div>

        <router-link to="caloriesresult"  v-on:click.native="calories_calculator()"><button class="btn btn-primary" type="button">Calculate calories</button></router-link>
      </div>

      <div class="col">
        
      </div>
    </div>
  </div>
</template> 

<script>
import variables from "@/variables.js";

export default {
  name: "calorieIntakeCalculator",
  data() {
    return {
      variables,
    };
  },
  methods: {
    	calories_calculator(){
        if(this.variables.weight_gain_loss=='1'){
          if(this.variables.gender=='1'){
            this.variables.bmr=66 + (6.3 * (this.variables.weight*2.2)) + (12.9 * (this.variables.height*0.393701))-(6.8 * this.variables.age);
            this.variables.maintain=this.variables.bmr*1.2;
            if(this.variables.activity == '1'){
              this.variables.loss_gain=this.variables.bmr*1.375;
            }

             if(this.variables.activity == '2'){
               this.variables.loss_gain=this.variables.bmr*1.55;
             }

             if(this.variables.activity == '3'){
               this.variables.loss_gain=this.variables.bmr*1.725;
             }
        }else{
           this.variables.bmr=655 + (4.3 *(this.variables.weight*2.2)) + (4.7 * (this.variables.height*0.393701))-(6.8 * this.variables.age);
             this.variables.maintain=this.variables.bmr*1.2;
           if(this.variables.activity == '1'){
              this.variables.loss_gain=this.variables.bmr*1.375;
            }

             if(this.variables.activity == '2'){
               this.variables.loss_gain=this.variables.bmr*1.55;
             }

             if(this.variables.activity == '3'){
               this.variables.loss_gain=this.variables.bmr*1.725;
             }
        }else{

        if(this.variables.gender=='1'){
          this.variables.bmr=66 + (6.3 * (this.variables.weight*2.2)) + (12.9 * (this.variables.height*0.393701))-(6.8 * this.variables.age);
            this.variables.maintain=this.variables.bmr*1.2;
             if(this.variables.activity == '1'){
              this.variables.loss_gain=this.variables.bmr*2.750;
            }

             if(this.variables.activity == '2'){
               this.variables.loss_gain=this.variables.bmr*3.10;
             }

             if(this.variables.activity == '3'){
               this.variables.loss_gain=this.variables.bmr*3.450;
             }
        }else{
           this.variables.bmr=655 + (4.3 *(this.variables.weight*2.2)) + (4.7 * (this.variables.height*0.393701))-(6.8 * this.variables.age);
             this.variables.maintain=this.variables.bmr*1.2;
              if(this.variables.activity == '1'){
              this.variables.loss_gain=this.variables.bmr*2.750;
            }

             if(this.variables.activity == '2'){
               this.variables.loss_gain=this.variables.bmr*3.10;
             }

             if(this.variables.activity == '3'){
               this.variables.loss_gain=this.variables.bmr*3.450;
             }

        }
      }

  },
},
}
</script>

<style scoped>
.row{
  padding-bottom: 40px;
}
.title{
  color: aliceblue;
}
</style>
