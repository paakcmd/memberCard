import React, { Component } from 'react';

class Account extends Component {
  render() {
    return (
      <div>
        <div className="page-header">Account</div>
        <div className="account">
          <img className="account-profile-picture" src="Images/profile_mockup.png" className="account-profile-picture"/>
          <div className="account-display-name">Chamadol Nameklap</div>
          <a href="/api/logout"><button className="logout-button" >Logout</button></a>
        </div>
      </div>

    )
  }
}

export default Account;
