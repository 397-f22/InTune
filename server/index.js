const client_id = '50b9072a4f584a75b485ca320331132b'
const client_secret = '7016177d36864800a4cd676c291309a4'
var token = 'BQCz3ATPtlq6haTzJJ-3Gbrt_btJ_nf7G-GYauWptLojHDhy1SZOeFhHmXbQTPFF2gUolWiNuA8V5iFTT18YypvtjPm9MwMM18K1DoF_zcVkC-yw90sIwYjf1uENEg2TJnvwr22kre4qere_ph9sn4KBeXVLLaZpNK4_cJue7KitAg4'
const PORT = process.env.PORT || 3001;
const express = require('express');
const request = require('request');
const app = express();
const path = require('path');

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
app.get("/api", (req, res) => {
  //here is where we would check what the req is(playlist or otherwise)
  console.log("api token: " + token)
  res.json({ token });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});