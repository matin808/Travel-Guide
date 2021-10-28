import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDxjZ4AoSU538-SQB7KvTESYlHOHr0Kc",
  authDomain: "yatraguide.firebaseapp.com",
  databaseURL: "https://yatraguide-default-rtdb.firebaseio.com",
  projectId: "yatraguide",
  storageBucket: "yatraguide.appspot.com",
  messagingSenderId: "610609591817",
  appId: "1:610609591817:web:fbbf5be9024dcfcee72ad8",
  measurementId: "G-Y9GNXJ6R2H"
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;
  