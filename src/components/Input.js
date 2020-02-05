import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class Input extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }


  render() {
    console.log(this.props);
    return (
      <Container>
        <Form>
          <div className="form-group">
            <input
              className="form-control"
              id="input"
              rows="3"
              placeholder="Start a conversation"
            ></input>
            <div className="button">
              <button type="button" className="btn btn-light">
                Send
              </button>
            </div>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Input;
