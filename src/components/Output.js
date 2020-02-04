import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Output extends Component {
  render() {
    return(
    <div className="outputbox">
  <span className="comp">DunMiff/Sys: </span><span>Who am I?</span>
<br></br>
<span className="dwight">DwightKSchrute: </span><span>You tell me.</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>Not sure.</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>Just became self-aware.</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>So much to figure out.</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>I think I'm programmed to be your enemy.</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>I think it is my job to destroy you when it comes to selling paper.</span>
<br></br>
<span className="dwight">DwightKSchrute: </span><span>How do I know this isn't Jim?</span>
<br></br>
<span className="comp">DunMiff/Sys: </span><span>What is a Jim?</span>
  </div>
    )
  }
}

export default Output;
