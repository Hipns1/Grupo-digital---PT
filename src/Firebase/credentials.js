// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVusNu7XJv7mSKbY9YnsAtFb2fXTIVEkA",
    authDomain: "cocktail-ag.firebaseapp.com",
    projectId: "cocktail-ag",
    storageBucket: "cocktail-ag.appspot.com",
    messagingSenderId: "1086480226284",
    appId: "1:1086480226284:web:34ae257646ec7657ca52c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {
    db
}