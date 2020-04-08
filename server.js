const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
var path = require("path");



app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use('/', express.static(path.join(__dirname, '/client', '/build')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});







app.get('/api/messages', (req, res) => {
  res.send(messages);
});





app.post('/api/messages', (req, res) => {
  const messages = [
    {id: 1, username: 'ted', text: 'hey'},
    {id: 2, username: 'ned', text: 'hi'},
    {id: 1, username: 'ted', text: 'hows it going?'},
    {id: 2, username: 'ned', text: 'its going..'},
  ];
  
  if(!req.body.text || req.body.text.length < 1){
    res.status(400).send ('You need to input at least 1 character');
    return;
  }
  const message = {
    id: messages.length + 1,
    text: req.body.text,
    username: req.body.username
  };
  messages.push(message);
  res.send(message);
});







app.get('/api/users', (req, res) => {
  res.send(username);
});







app.post('/api/users', (req, res) => {
  const users =  req.body.users;
});







app.get('/api/users/:id', (req, res) => {
 const id = id.find(i => i.id === parseInt(req.params.id));
 if (!message) res.status(404).send("Not Found");
 res.send(id);
});







// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));