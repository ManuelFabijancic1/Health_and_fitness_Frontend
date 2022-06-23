23 lines (21 sloc)  399 Bytes

<template>
<div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-4" id="lista">{{info.id}}</div>
      <div class="col-4" id="lista">{{info.name1}}</div>
      <div class="col-4" id="lista">{{info.howto}}</div>
      <div class="col-4" id="lista">{{info.type}}</div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: "getAll",
};
</script>

<style>
#lista {
   border: 1px solid black;
}
</style>