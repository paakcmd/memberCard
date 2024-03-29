import React, { Component } from 'react';
import { connect } from 'react-redux';

class Account extends Component {
  render() {
    return (
      <div>
        <div className="page-header">Account</div>
        <div className="account">
          <img alt="profileimg" className="account-profile-picture" src={this.props.auth.imageUrl} />
          <div className="account-display-name">{this.props.auth.name}</div>
          <a href="/api/logout"><button className="logout-button" >Logout</button></a>
        </div>
      </div>

    )
  }
}

export default connect(
  state => {
    return { auth: state.auth };
  },
  null
)(Account);
