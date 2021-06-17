import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkl6FQ0-6wv3zWZhZCZyF_hISeaXZRjD0",
    authDomain: "redux-clone.firebaseapp.com",
    projectId: "redux-clone",
    storageBucket: "redux-clone.appspot.com",
    messagingSenderId: "233208147255",
    appId: "1:233208147255:web:4985a13efc8bb616f23eb2",
    measurementId: "G-DHNTTNBH36"
  };

// this connects the frontend the firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// this is the google provider for logging in 
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }