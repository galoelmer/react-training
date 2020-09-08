import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBF6ZyA79HBknLFGg2iVidKCFLqiOtUF1I',
  authDomain: 'reddit-clone-a9de0.firebaseapp.com',
  databaseURL: 'https://reddit-clone-a9de0.firebaseio.com',
  projectId: 'reddit-clone-a9de0',
  storageBucket: 'reddit-clone-a9de0.appspot.com',
  messagingSenderId: '375411822522',
  appId: '1:375411822522:web:bbe31c112dab6ec1c69783',
  measurementId: 'G-QBZJZDWPJQ',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;