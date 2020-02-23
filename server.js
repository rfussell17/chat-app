
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var path = require("path");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.sendFile({ express: 'Express connected to React'});
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.use('/js', express.static(path.join(__dirname, '/client/build/js')));