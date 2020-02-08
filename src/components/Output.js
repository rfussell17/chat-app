import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const message = [
  {
    user: "ron",
    msg: "yo"
  },
  {
    user: "leon",
    msg: "yooo"
  },
  {
    user: "ray-ron",
    msg: "ayyee"
  }
];

class Output extends Component {
  render() {
    return (
      <div className="outputbox">
        {message.map((message, index) => {
          return (
            <div key={index} className="msgObject">
        <div className="user">{message.user}:</div>
              <div className="msg">{message.msg}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Output;
