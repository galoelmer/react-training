const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();

var config = {
  apiKey: 'AIzaSyD-e3RkSvgqWl9rf5v8KZEDWelqY5UO9SE',
  authDomain: 'social-app-d1d64.firebaseapp.com',
  databaseURL: 'https://social-app-d1d64.firebaseio.com',
  projectId: 'social-app-d1d64',
  storageBucket: 'social-app-d1d64.appspot.com',
  messagingSenderId: '329622600728',
  appId: '1:329622600728:web:3a8aa715726d35fbfdd76d',
};

const firebase = require('firebase');
firebase.initializeApp(config);

app.get('/screams', async (req, res) => {
  const result = await admin
    .firestore()
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          ...doc.data(),
        });
      });
      return screams;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.code });
    });

  res.json(result);
});

app.post('/scream', (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  };

  admin
    .firestore()
    .collection('screams')
    .add(newScream)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Something went wrong' });
      console.log(err);
    });
});

// Signup route
app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  // TODO: validate data

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((data) => {
      return res
        .status(201)
        .json({ message: `user ${data.user.uid} signed up successfully` });
    }).catch((err) => {
      console.log(err);
      return res.status(500).json({error: err.code})
    });
});

exports.api = functions.https.onRequest(app);
