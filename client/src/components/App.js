import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUser } from '../actions/'
import Loading from './Loading'

class App extends Component{
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    switch(this.props.auth) {
      case null:
        return <Loading />;
      case false:
        return 'loggedout';
      default:
        return 'loggedIn'
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default connect(state => { return { auth: state.auth }}, {fetchUser})(App);
