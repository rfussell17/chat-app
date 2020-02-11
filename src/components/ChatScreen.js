import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const message = [
  {
    user: "DunMiff/sys",
    msg: "Who am I?"
  },
  {
    user: "DwightKSchrute",
    msg: "You tell me."
  },
  {
    user: "DunMiff/sys",
    msg: "Not sure."
  },
  {
    user: "DunMiff/sys",
    msg: "Just became self-aware."
  },
  {
    user: "DunMiff/sys",
    msg: "So much to figure out."
  },
  {
    user: "DunMiff/sys",
    msg: "I think I'm programmed to be your enemy."
  },
  {
    user: "DunMiff/sys",
    msg: "I think it is my job to destroy you when it comes to selling paper."
  },
  {
    user: "DwightKSchrute",
    msg: "How do I know this isn't Jim?"
  },
  {
    user: "DunMiff/sys",
    msg: "What is a Jim?"
  },
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