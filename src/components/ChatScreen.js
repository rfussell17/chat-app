import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const message = [
  {
    user: "DunMiff/sys",
    msg: "Hello"
  },
  {
    user: "DwightKSchrute",
    msg: "who is this?"
  }
];

function ChatScreen(props) {

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

export default ChatScreen;