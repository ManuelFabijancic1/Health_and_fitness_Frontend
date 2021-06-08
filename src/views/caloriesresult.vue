<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <div class="row">
          <h1 class="title">Maintain Weight:</h1>
            <span>{{this.variables.maintain}}</span>
         
        </div>

        <div class="row">
          <h1 class="title">Weight loss/gain:</h1>
             <span>{{this.variables.loss_gain}}</span>
         
        </div>


        <router-link to="home"><button class="btn btn-primary" type="button">Go back</button></router-link>
      </div>

      <div class="col">
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.row{
  padding-bottom: 40px;
}
.title{
  color: aliceblue;
}

</style>

<script>
import variables from '@/variables.js'
export default {
  name: "caloriesresult",
   data() {
    return{ 
      variables,
      };
    },
};
</script>