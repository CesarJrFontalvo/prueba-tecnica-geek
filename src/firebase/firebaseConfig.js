
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCBIcVDuY-rJRS09i0q-0WidNvKMz-j7u4",
  authDomain: "prueba-tecnica-geek.firebaseapp.com",
  projectId: "prueba-tecnica-geek",
  storageBucket: "prueba-tecnica-geek.appspot.com",
  messagingSenderId: "872181898011",
  appId: "1:872181898011:web:9f26aa655851f1180351be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google =  new GoogleAuthProvider();

export{
    app,
    db,
    google
}