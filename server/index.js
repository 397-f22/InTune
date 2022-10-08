const client_id = '50b9072a4f584a75b485ca320331132b'
const client_secret = '7016177d36864800a4cd676c291309a4'
var token = '';
const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
const functions = require("firebase-functions");
const cors = require('cors');


//Not used since we are allowing for all origins
var corsOptions = {
    origin: 'https://intune-ab424.web.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    token = body.access_token;
  }
});



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../public')));

// Handle GET requests to /api route
app.get("/api",cors(), (req, res) => {
  //here is where we would check what the req is(playlist or otherwise)
  res.json({ token });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

exports.app = functions.https.onRequest(app);