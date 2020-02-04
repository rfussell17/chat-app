import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Input.css";
import "./Output.css";
import Input from "./components/Input";
import Output from "./components/Output";
import User from "./components/User";
import Container from "react-bootstrap/Container";

class App extends React.Component {


render(){
  return (
    <Container className="App">
      <Container className="desktop">
        <Output />
        <Input />
      </Container>
    </Container>
  );
}
}

export default App;
