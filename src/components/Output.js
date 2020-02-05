import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Output extends Component {
  render() {
    const { message } = this.props;
    return <div className="outputbox">
      <p>{message}</p>
    </div>;
  }
}

export default Output;
