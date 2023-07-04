import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyBKzr7Juuv7U5flaJWFFW96QNyB1pC83l4",
    authDomain: "charitable-27036.firebaseapp.com",
    projectId: "charitable-27036",
    storageBucket: "charitable-27036.appspot.com",
    messagingSenderId: "403701437440",
    appId: "1:403701437440:web:67699edf4d894c87aa74e5",
    measurementId: "G-4KMHQTQPL8"
  };
  
  // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;