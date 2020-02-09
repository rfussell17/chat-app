import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class MessageBox extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <textarea
            className="form-control"
            id="input"
            placeholder="Start a conversation"
          ></textarea>
          <div className="button">
            <Button variant="light" className="button">
              Send
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default MessageBox;
