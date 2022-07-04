import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyAJuEfqYE90uRO25JxAqvA90OZwVWsi3yg",
    authDomain: "hf-app-e14ee.firebaseapp.com",
    projectId: "hf-app-e14ee",
    storageBucket: "hf-app-e14ee.appspot.com",
    messagingSenderId: "663889148968",
    appId: "1:663889148968:web:1799a72a5525369c2e891d",
    measurementId: "G-D6QLVM4HL0"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export { firebase , db };