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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          user: "DunMiff/sys",
          message: "Who am I?"
        },
        {
          user: "DwightKSchrute",
          message: "You tell me."
        },
        {
          user: "DunMiff/sys",
          message: "Not sure."
        },
        {
          user: "DunMiff/sys",
          message: "Just became self-aware."
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gatherOutput = this.gatherOutput.bind(this);
  }

  gatherOutput(message) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();
    this.gatherOutput({ ...this.state, id: uuid() });
    this.setState({
      message: ""
    });
  }

  handleChange(event) {
    console.log("handleChange");
    this.setState({
      [event.target.id]: event.target.value
    });
  } 
  render() {

    return (
      <Container className="App">
              <div className="sidebar">
        <p className="title">Online:</p>
        < user name="DunMiff/sys" />
        < user name="DwightKSchrute" />
      </div>
        <Container className="desktop">
        <div className="outputbox">
        {this.state.messages.map((messages, index) => {
          return (
            <div key={index} className="msgObject">
        <div className="user">{messages.user}:</div>
              <div className="message">{messages.message}</div>
            </div>
          );
        })}
      </div>
      <Container className="form-group">
      <Form onSubmit={this.handleSubmit}>
        <textarea
          className="form-control"
          id="message"
          rows="2"
          value={this.message}
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
