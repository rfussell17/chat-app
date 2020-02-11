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
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event, props) {
    console.log("button pressed");
    event.preventDefault();
    this.props.message(props.state.message);
    this.setState({
      message: ""
    });
  }
  render() {
    return (
      <Container className="App">
        <Sidebar />
        <Container className="desktop">
          <ChatScreen 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          message={this.message}/>
          <MessageBox 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          message={this.message}
          />
        </Container>
      </Container>
    );
  }
}

export default App;
