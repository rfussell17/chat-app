import React from 'react';


class User extends React.Component{
  render() {
    const {name} = this.props;
    return (
      <div>
      <p>{name}:</p>
      </div>
    )
  }
}

export default User;