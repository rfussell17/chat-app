import React from "react";

import User from "./User";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 'Ted' };
  }
    render() {
      return (
        <div>
        <p className="title">Online:</p>
          <div name="user">{this.state.user}</div>
          </div>
      )
  }
}

export default Sidebar;
