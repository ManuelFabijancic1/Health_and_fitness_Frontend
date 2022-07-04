<template>
     <div class="container">
  <div class="row">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase1)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][0]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][0]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>

  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][1])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase2)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][1]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][1]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>




<div class="row"  v-if="JSON.stringify(this.store.nameuser[0][2])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase3)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][2]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][2]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][3])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase4)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][3]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][3]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>




  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][4])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase5)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][4]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][4]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>




  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][5])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase6)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][5]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][5]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>




  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][6])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase7)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][6]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][6]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][7])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase8)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][7]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][7]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][8])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase9)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][8]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][8]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][9])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase10)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][9]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][9]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][10])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase11)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][10]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][10]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][11])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase12)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][11]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][11]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][12])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase13)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][12]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][12]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][13])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase14)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][13]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][13]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][14])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase15)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][14]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][14]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][15])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase16)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][15]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][15]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  




  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][16])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase17)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][16]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][16]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][17])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase18)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][17]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][17]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][18])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase19)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][18]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][18]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][19])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase20)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][19]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][19]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>







  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][20])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase21)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][20]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][20]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][21])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase22)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][21]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][21]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][22])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase23)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][22]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][22]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][23])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase24)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][23]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][23]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>





  <div class="row"  v-if="JSON.stringify(this.store.nameuser[0][24])!== undefined">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img id="slika" v-bind:src="`${String( this.store.url_slika_firebase25)}`"  alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">{{String(Object.values( this.store.nameuser[0][24]))}}</h5>
          
          
         <p class="card-text" id="text">{{String(Object.values( this.store.descuser[0][24]))}} </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>







    <div class="row">
        <div class="col-sm">
             <router-link to="/" v-on:click.native="eraseworkout()">
        <button id="endbutton" type="button" class="btn btn-dark">DELETE WORKOUT</button>
         </router-link>
        </div>
        <div id="end" class="col-sm">
     
        </div>
        
    <div class="col-sm">
        <router-link to="/">
        <button id="endbutton" type="button" class="btn btn-dark">END WORKOUT</button>
        </router-link>
    </div>
   
    </div>
     </div>
</template>
<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
    name:"workouttracker",
      data(){
   return {
    store
   };
  },
  methods:{

    eraseworkout(){
   db.collection("users").doc(String(store.currentUser)).delete()
       
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
        this.store.brojac=2
        
     

 }

                        
  }
    }
     


</script>

<style scoped>
#vjezbe{
    background-color: #2C2C2C;
    color: aliceblue;
}
#checkbox{
    align-self: center;
}
#endbutton{
    margin-top: 10%;
  margin-bottom: 7%;
    
}
#text{
    margin-left: 7%;
}
#slika{
height: 400px;
width: 400px;
}

</style>