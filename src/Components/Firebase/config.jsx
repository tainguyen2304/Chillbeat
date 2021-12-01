import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDGP5mQb56BW8Vzxd4g072vZZRr5ndxjcs",
  authDomain: "beat-app-afb80.firebaseapp.com",
  projectId: "beat-app-afb80",
  storageBucket: "beat-app-afb80.appspot.com",
  messagingSenderId: "1066303023935",
  appId: "1:1066303023935:web:114be7c4416e0d86ca418a",
  measurementId: "G-SGEXEXKYVK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
