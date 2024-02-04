import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBGu1TDPQBP3vjeTiUfzyTkpzw5MjGfw7o",
    authDomain: "e-facteur.firebaseapp.com",
    projectId: "e-facteur",
    storageBucket: "e-facteur.appspot.com",
    messagingSenderId: "85772368573",
    appId: "1:85772368573:web:9de32626be3c9f894795d4"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};