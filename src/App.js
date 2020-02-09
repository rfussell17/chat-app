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
  constructor() {
    super();
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

  handleSubmit(event) {
    console.log("button pressed");
    event.preventDefault();
    this.props.message(this.state.message);
    this.setState({
      message: ""
    });
  }
  render() {
    return (
      <Container className="App">
        <Sidebar />
        <Container className="desktop">
          <ChatScreen />
          <MessageBox />
        </Container>
      </Container>
    );
  }
}

export default App;
