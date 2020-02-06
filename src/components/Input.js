import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FormGroup from "react-bootstrap/FormGroup";

class Input extends Component {
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
    event.preventDefault();
    this.props.Msg(this.state.nessage);
    this.setState({
      message: ""
    });
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
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
        </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Input;
