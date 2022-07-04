<template>
  <div id="app">
   <nav id="navibar" class="navbar navbar-light" style="background-color: #707070;">
   
     <router-link  to="/"><img id="logo"  src="@/assets/logo.png"
               height="60"
               /></router-link >

  <div class="nav-item">
          <div v-if="!store.currentUser" class="links">
            <div class="row">
              
            <router-link to="/login"> <button type="button" class="btn btn-dark">login</button></router-link>
            <span class="razmak"><a>-----</a>
            </span>
            <router-link to="/signup"> <button type="button" class="btn btn-dark">signup</button></router-link>
            </div>
            
          </div>
          <div v-if="store.currentUser" class="links">
            <div class="row">
               <router-link to="/workoutmenager"> <button type="button" class="btn btn-dark">WORKOUT MENAGER</button></router-link>
            <span class="razmak"><a>----</a>
           </span>
              <a href="#" @click.prevent="logout()" class="nav-link"><button type="button" class="btn btn-dark">logout</button></a>
            
            </div>
          </div>
        </div>
</nav>
<body>
</body>
    <router-view/>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";
firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("*** User", user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  } else {
    console.log("*** No user");
    store.currentUser = null;
    if (currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  }
});
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #5e5e5e;
}
html,
body {
  margin: 0;
  padding: 0;
  background-color: #5e5e5e;
}

#navibar {
  margin: 3%;
  z-index: 99999;
}
#logo {
  margin-left: 7%;
}

#Login_button {
  margin-right: 1%;
}
</style>
