import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class MessageBox extends Component {
  render() {
    return (
      <Container className="form-group">
        <Form onSubmit={props.handleSubmit}>
        <textarea
          className="form-control"
          id="message"
          rows="2"
          required
          value={props.message}
          placeholder="Start a conversation..."
          onChange={props.handleChange}
        />
        <Button type="submit" variant="light" className="button">
          Send
        </Button>
        </Form>
      </Container>
    );
  }
}

export default MessageBox;
