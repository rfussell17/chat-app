import React from "react";

class User extends React.Component {
  render() {
    const { name } = this.props;
    const { message } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{message}</p>
      </div>
    );
  }
}

export default User;
