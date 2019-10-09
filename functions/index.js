const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));


app.get('/users/:id', (req, res) => res.send(`GET /api/users/${req.params.id} here`));
app.post('/users', (req, res) => res.send(`POST here`));
app.put('/users/:id', (req, res) => res.send(`PUT here`));
app.delete('/users/:id', (req, res) => res.send(`DELETE here`));
app.get('/users', (req, res) => res.send(`GET users here`));

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
