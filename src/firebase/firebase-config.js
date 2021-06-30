import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdOGleoxRTEyaJPUm7RueOM-0vOGLFomM",
    authDomain: "app-redux-react.firebaseapp.com",
    projectId: "app-redux-react",
    storageBucket: "app-redux-react.appspot.com",
    messagingSenderId: "100081623277",
    appId: "1:100081623277:web:3754894bd9df3384f02ce4",
    measurementId: "G-W9C2RCTQW2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Esta es la base de datos
const db = firebase.firestore();

//Google provider para registrarse e iniciar secion por google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}