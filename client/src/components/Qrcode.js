import React, { Component } from 'react';

class Qrcode extends Component {
  render() {
    return (
      <div>
        <div className="page-header">My Qrcode</div>
        <div className="myqrcode">
          <img className="qrcode" src="../Images/qrcode_mockup.jpeg" />
          <div className="myqrcode-description">Have the marchant scan your QR code to give you points or stamps</div>
        </div>
      </div>


    )
  }
}

export default Qrcode;
