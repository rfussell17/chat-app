const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const dataAccess = require('./data-access');

var path = require("path");

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "Pass22!",
  host: "localhost",
  port: 5432,
  database: "chat_app",
});

execute();

async function execute() {
  try {
    await client.connect();
    console.log("Connected Successfully");
    const results = await client.query("select * from users, messages");
    console.table(results.rows);
  } catch (ex) {
    console.log(`Something went wrong ${ex}`);
  } finally {
    await client.end();
    console.log("Client disconnected succesfully");
  }
}


app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/", express.static(path.join(__dirname, "/client", "/build")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//--------------get requests-------------------------------------

app.get("/api/messages", async (req, res) => {
  const messagesResponse = await dataAccess.getMessages();
  if (messagesResponse.success === true) {
    res.send(messagesResponse.data);
  } else {
    res.status(500).send(messagesResponse.error);
  }
});

app.get("/api/users", async (req, res) => {
  const usersResponse = await dataAccess.getUsers();
  if (usersResponse.success === true) {
    res.send(usersResponse.data);
  } else {
    res.status(500).send(usersResponse.error);
  }
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
  res.status(201).setHeader("Location", "/api/users/:id").send(user);
});

app.post("/api/messages", (req, res) => {
  if (!req.body.text || req.body.text.length < 1) {
    res.status(400).send("You need to input at least 1 character");
    return;
  }
  const message = {
    id: messages.length + 1,
    user: req.body.user,
    text: req.body.text,
  };
  messages.push(message);
  res.send(message);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
