
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_UR,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  messagingSenderId: process.env.REACT_APP_FB_MSIS,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};


initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
