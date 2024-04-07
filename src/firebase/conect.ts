
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyCNMHDSnAG5pDBy_Y66rSicSHIcP1nJ_Hs",
  authDomain: "polyglot-3a4e2.firebaseapp.com",
  databaseURL: "https://polyglot-3a4e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "polyglot-3a4e2",
  storageBucket: "polyglot-3a4e2.appspot.com",
  messagingSenderId: "471466554032",
  appId: "1:471466554032:web:30d670aa688448d40f0175",
  measurementId: "G-XRWJQP4GQV"
};


const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const db = getDatabase(firebaseApp);
