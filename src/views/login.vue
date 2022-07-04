<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"/>
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
            
            <button type="button" @click="login()" class="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
        <div class="col-sm">
          <h2 id="signup1">Dont have an account?</h2>
          <router-link id="link" to="/signup"><button id="signupbut" type="button" class="btn btn-dark">
              Signup
            </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#signup1 {
  text-align: center;
}
#link {
  text-align: center;
}
</style>

<script>
import { firebase } from "@/firebase.js";
export default {
  name: "login",
  data() {
    return {
      email:"",
      password:"",
      
      
    };
  },
  methods: {
    login() {
      console.log("login...." + this.email);
      console;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("Uspješna prijava!", result);
          
          this.$router.replace({ name: '/Home' });
        })
        .catch(function (e) {
          console.error("Greška", e);
        });
        
    },
  },
};
</script>
<style>
#signupbut{
margin-bottom: 850px;
}
</style>