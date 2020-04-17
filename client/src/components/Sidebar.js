import React from 'react'

class Sidebar extends React.Component {




  constructor(props) {
    super(props);
    this.state = { user: 'Robin'}, {user: 'Bob'}
  }
    render() {
      return (
        <div className="sidebar">
          <p className="title">Online:</p>
          <div name="user">{this.state.user}</div>
        </div>
      )
  }
}

export default Sidebar;