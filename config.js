import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAZUSa2wTKkKPU62m6NDv_HgdxvFYpS0XA",
  authDomain: "barter-6c51e.firebaseapp.com",
  projectId: "barter-6c51e",
  storageBucket: "barter-6c51e.appspot.com",
  messagingSenderId: "992820362461",
  appId: "1:992820362461:web:768c31d8f7dd33c90caf34"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
