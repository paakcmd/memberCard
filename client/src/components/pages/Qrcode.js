import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';

class Qrcode extends Component {
  render() {
    return (
      <div>
        <div className="page-header">My Qrcode</div>
        <div className="myqrcode">
          <QRCode size={200} className="qrcode" value={this.props.auth.ref}/>
          <div className="qrcode-ref">{this.props.auth.ref}</div>
          <div className="myqrcode-description">Have the marchant scan your QRcode to give you points or stamps</div>
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
)(Qrcode);
