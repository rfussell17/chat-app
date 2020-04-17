const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
var path = require("path");


const users = [
  { id: 1, name: "Robin" },
  { id: 2, name: "Glen" }
];

const messages = [
  { id: 1, user: "Robin", text: "Hey there" },
  { id: 2, user: "Glen", text: "Oh hey" },
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
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send("User not found");
  res.send(user);
});

//--------------post requests--------------------------------------

app.post("/api/users", (req, res) => {
  if (!req.body.name || req.body.name.length < 2) {
    res
      .status(400)
      .send("Name is required and should be at least 2 characters");
    return;
  }

  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.send(user);
});

app.post("/api/messages", (req, res) => {
  if (!req.body.text || req.body.text.length < 1) {
    res.status(400).send("You need to input at least 1 character");
    return;
  }
  const message = {
    id: messages.length + 1,
    user: req.body.user,
    text: req.body.text
  };
  messages.push(message);
  res.send(message);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
