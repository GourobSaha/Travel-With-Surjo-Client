// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVzesoC2Dc4Qv2OaDY2e0unhfSfr-3-Zs",
    authDomain: "travel-with-surjo.firebaseapp.com",
    projectId: "travel-with-surjo",
    storageBucket: "travel-with-surjo.appspot.com",
    messagingSenderId: "835642586679",
    appId: "1:835642586679:web:b5258889c569aab0de31b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;