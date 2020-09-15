import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-LMzi5z6AGks9j0wdKnvsVP5Pb1OyXj0",
    authDomain: "yourplan-1863f.firebaseapp.com",
    databaseURL: "https://yourplan-1863f.firebaseio.com",
    projectId: "yourplan-1863f",
    storageBucket: "yourplan-1863f.appspot.com",
    messagingSenderId: "194544667330",
    appId: "1:194544667330:web:f2487f3be239a34e8d095b",
    measurementId: "G-CCG1YBPE8C"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};