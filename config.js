import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCfi8ur3ON1Q-m5T1VB2nVl0JLZ0NAMItc",
  authDomain: "food-santa.firebaseapp.com",
  databaseURL: "https://food-santa.firebaseio.com",
  projectId: "food-santa",
  storageBucket: "food-santa.appspot.com",
  messagingSenderId: "199394297299",
  appId: "1:199394297299:web:6f2485f8bece2a68931b26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
