<template>
  <div id="sign" class="signup">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
             <div class="form-group">
            <label for="exampleInputusername1">username</label>
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Repeat Password</label>
            <input
              type="password"
              v-model="passwordRepeat"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <button id="subbut" type="button" @click="signup()" class="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
      <div class="col">
        <div class="col">
          <h2 id="login1">Already have an account ?</h2>
          <router-link to="/login"><button type="button" class="btn btn-dark">
              Login
            </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase, db } from "@/firebase.js";
export default {
  name: 'registracija',
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
      username:""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function () {
          console.log("Uspješna registracija");
          this.$router.replace({ name: 'login' });
        })
        .catch(function (error) {
          console.error("Greška", error);
        });
      console.log("nastavak"); 
      db.collection("users2").doc(String(this.email)).set({user: this.username});
    },
  },
};
</script>
<style>
#subbut{

  margin-top: 7%;
}
</style>