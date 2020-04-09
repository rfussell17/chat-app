const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
var path = require("path");


const users = [
  {id: 1, name: 'Robin'},
  {id: 2, name: 'Glen'},
  {id: 3, name: 'Steve'},
  {id: 4, name: 'Meg'},
  {id: 5, name: 'Rango'},
  {id: 6, name: 'Lulu'}
];

const messages = [
{id: 1, message: "heeeey"}
];


app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/", express.static(path.join(__dirname, "/client", "/build")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});


//--------------get requests-------------------------------------



app.get("/api/messages", (req, res) => {
  res.send(messages);
});


app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
 const user = users.find(u => u.id === parseInt(req.params.id));
 if(!user) res.status(404).send('User not found');
 res.send(user);
});


//--------------post requests--------------------------------------



app.post("/api/users", (req, res) => {

});

app.post("/api/messages", (req, res) => {
  
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
