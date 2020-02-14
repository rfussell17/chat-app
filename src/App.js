import React from "react";
import uuid from "uuid/v4";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./MessageBox.css";
import "./ChatScreen.css";
import "./Sidebar.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static('public'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: "Robin",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gatherOutput = this.gatherOutput.bind(this);
  }

  gatherOutput(message) {
    this.setState({
      messages: [...this.state.messages, message],
      message: this.state.message
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.gatherOutput({ ...this.state, id: uuid() });
    this.setState({
      message: "",
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  
  render() {
    return (

      <Container className="App">
        <div className="sidebar">
          <p className="title">Online:</p>
    <div name="user">{this.state.user}</div>
        </div>
        <Container className="desktop">

          <div className="outputbox">
            {this.state.messages.map((messages, index) => {
              return (
                <div key={index}>
                  <div className="user">{messages.user}:</div>
                  <div className="message">{messages.message}</div>
                </div>
              );
            })}
          </div>
          <Container className="form-group">
            <Form onSubmit={this.handleSubmit}>
              <input type="text" required
                className="form-control"
                id="message"
                rows="2"
                value={this.state.message}
                placeholder="Start a conversation..."
                onChange={this.handleChange}
              />
              <Button type="submit" variant="light" className="button">
                Send
              </Button>
            </Form>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;
