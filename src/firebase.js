// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMrJe4NojouyTu_RKeX5vZwsGuhntqXic",
    authDomain: "notesapplication-69fb1.firebaseapp.com",
    databaseURL: "https://notesapplication-69fb1-default-rtdb.firebaseio.com",
    projectId: "notesapplication-69fb1",
    storageBucket: "notesapplication-69fb1.appspot.com",
    messagingSenderId: "308587090116",
    appId: "1:308587090116:web:e70b987229cd9606ceb991"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;