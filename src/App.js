import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Input.css";
import "./Output.css";
import "./Sidebar.css"
import Input from "./components/Input";
import Output from "./components/Output";
import Container from "react-bootstrap/Container";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("pressed send")
  }


render(){
  return (
    <Container className="App">
      <Sidebar />
      <Container className="desktop">
        <Output />
        <Input />
      </Container>
    </Container>
  );
}
}

export default App;
