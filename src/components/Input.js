import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Input() {
  return (
    <Container>
      <Form name="message" type="text" required>
        <div className="form-group">
          <textarea className="form-control" id="input" rows="3"></textarea>
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

export default Input;
