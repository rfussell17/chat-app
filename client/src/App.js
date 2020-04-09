import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Container from "react-bootstrap/Container";
import Sidebar from "./components/Sidebar";
import ChatApp from "./components/ChatApp";


class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <Sidebar />
        <ChatApp />
        </Container>
    );
  }
}

export default App;