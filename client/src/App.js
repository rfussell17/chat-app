import React from "react";
import uuid from "uuid/v4";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sidebar from "./components/Sidebar";

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

  async componentDidMount() {
    const response = await axios.get('api/messages'); 
    this.setState({
      messages: response.data
    })
  }

   async gatherOutput(message) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  async handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();
    const response = await axios.post('api/messages'); 
    this.setState({
      messages: response.data
    })
  }

     //send a post request to create message 
    //if request is successfull (201) get all new messages from server
    //axios - update state to include new messages

  handleChange(event) {
    console.log("handleChange");
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    return (
      <Container className="App">
      <Container className="container-1">
        <Sidebar/>
        <Container className="desktop">
          <div className="outputbox">
            {this.state.messages.map((message, index) => {
              return (
                <div key={index} className="msgObject">
                  <div className="user">{message.username}:</div>
                  <div className="message">{message.text}</div>
                </div>
              );
            })}
          </div>
          <Container className="form-group">
            <Form onSubmit={this.handleSubmit}>
              <input
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
      </Container>
    );
  }
}

export default App;