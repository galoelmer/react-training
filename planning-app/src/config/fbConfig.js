import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBkseKHkCayQ4Qzfgij1rsTPj5zxC37DtA',
  authDomain: 'app-planing.firebaseapp.com',
  databaseURL: 'https://app-planing.firebaseio.com',
  projectId: 'app-planing',
  storageBucket: 'app-planing.appspot.com',
  messagingSenderId: '533548401645',
  appId: '1:533548401645:web:e89028425735205d5edde4',
  measurementId: 'G-0JSR6FQ3JK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
