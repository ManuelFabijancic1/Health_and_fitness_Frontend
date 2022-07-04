<template>
 <div id="results" class="pt-4">
              <h5>Total Calories</h5>
              <div class="form-group">
                <div class="input-group">
                  <input type="number" class="form-control" id="total-calories" disabled>{{store.totalcalories}}

                </div>
              </div>                       
            </div>
</template>

<style scoped>
.row{
    text-align: left;
    font-size: 30px;
    
}
.text{
    color: white;
    margin-bottom: 2px;
}
.output{
    margin-left:3%;
}
</style>

<script>
export default {
  name: "caloriesresult",
};
</script>