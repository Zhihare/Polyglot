
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';



// const firebaseConfig = {
//   apiKey: "AIzaSyCNMHDSnAG5pDBy_Y66rSicSHIcP1nJ_Hs",
//   authDomain: "polyglot-3a4e2.firebaseapp.com",
//   databaseURL: "https://polyglot-3a4e2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "polyglot-3a4e2",
//   storageBucket: "polyglot-3a4e2.appspot.com",
//   messagingSenderId: "471466554032",
//   appId: "1:471466554032:web:30d670aa688448d40f0175",
//   measurementId: "G-XRWJQP4GQV"
// };


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  messagingSenderId: process.env.REACT_APP_FB_MSIS,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};


const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const db = getDatabase(firebaseApp);
