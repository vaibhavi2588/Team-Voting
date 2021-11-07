import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCtMMSB0csleVxYEXygfZ9CjjZtRyQ-qS8",
  authDomain: "project--67.firebaseapp.com",
  projectId: "project--67",
  storageBucket: "project--67.appspot.com",
  messagingSenderId: "179950982610",
  appId: "1:179950982610:web:fbf72e2988b79eee87a40b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
