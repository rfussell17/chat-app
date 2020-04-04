const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var path = require("path");

app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get('api/messages', function (req, res) {
  res.send('message get request')
});

app.post('api messages', (req, res) => {
  res.send('message post request')
});

app.get('api/users', (req, res) => {
  res.send('user get request')
});

app.post('api/users', (req, res) => {
  res.send('user post request')
});

app.get('api/users/{id}', (req, res) => {
  res.send('user id get request')
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));