import React from "react";
import User from "./User";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <p className="title">Online:</p>
        <User name="DunMiff/sys" />
        <User name="DwightKSchrute" />
      </div>
    );
  }
}

export default Sidebar;
