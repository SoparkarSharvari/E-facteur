// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//     // apiKey: "AIzaSyBGu1TDPQBP3vjeTiUfzyTkpzw5MjGfw7o",
//     // authDomain: "e-facteur.firebaseapp.com",
//     // databaseURL:"https://e-facteur-default-rtdb.firebaseio.com",
//     // projectId: "e-facteur",
//     // storageBucket: "e-facteur.appspot.com",
//     // messagingSenderId: "85772368573",
//     // appId: "1:85772368573:web:9de32626be3c9f894795d4"
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// const provider = new GoogleAuthProvider();
// export {auth,provider};

// export default app;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCivqclSQgClpM5HdNwkBNxF_JGym_WvVs",
  authDomain: "newef-2bcd7.firebaseapp.com",
  databaseURL:"https://newef-2bcd7-default-rtdb.firebaseio.com",
  projectId: "newef-2bcd7",
  storageBucket: "newef-2bcd7.appspot.com",
  messagingSenderId: "590108829526",
  appId: "1:590108829526:web:f4e605f9d36e35935698f7",
  measurementId: "G-M0510PSN0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
