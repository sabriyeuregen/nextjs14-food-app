import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCluWp7DJQ3HpAMJrUerzfd2RYbSBVvePw",
    authDomain: "hduysun-v1.firebaseapp.com",
    projectId: "hduysun-v1",
    storageBucket: "hduysun-v1.appspot.com",
    messagingSenderId: "882470643229",
    appId: "1:882470643229:web:ce837a6bed272eac1a08f4",
    measurementId: "G-TCZHRER09B"
  };
  
  
    const app=initializeApp(firebaseConfig);
  
    export const db=getFirestore()
  
    export const storage=getStorage(app)