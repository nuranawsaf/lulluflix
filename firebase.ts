// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH1db7Dw6JsaBvY9HhujnQ_nTAdD_WN4c",
    authDomain: "netflix-readdition.firebaseapp.com",
    projectId: "netflix-readdition",
    storageBucket: "netflix-readdition.appspot.com",
    messagingSenderId: "686015357471",
    appId: "1:686015357471:web:78e8efe80a3a6800fbab2a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }