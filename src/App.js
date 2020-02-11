import uuid from "uuid/v4";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./MessageBox.css";
import "./ChatScreen.css";
import "./Sidebar.css";

import Container from "react-bootstrap/Container";
import MessageBox from "./components/MessageBox";
import ChatScreen from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      conversation: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gatherOutput = this.gatherOutput.bind(this);
  }

  gatherOutput(msg) {
    this.setState({
      conversation: [...this.state.conversation, msg]
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
        <Sidebar />
        <Container className="desktop">
          <ChatScreen
            handleChange={this.handleChange}
            gatherOutput={this.gatherOutput}
            handleSubmit={this.handleSubmit}
            conversation={this.conversation}
          />
          <MessageBox
            handleChange={this.handleChange}
            gatherOutput={this.gatherOutput}
            handleSubmit={this.handleSubmit}
            conversation={this.conversation}
          />
        </Container>
      </Container>
    );
  }
}

export default App;
