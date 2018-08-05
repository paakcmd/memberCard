import React, { Component } from 'react';
import Card from './Card';
class MyCards extends Component {
  render() {
    return (
      <div>
        <div className="page-header">My cards</div>
        <div className="mycards">
          <Card cardImgSrc="Images/fuku.jpg" brandName="Fuku Matcha" />
          <Card cardImgSrc="Images/Chatime.jpg" brandName="Chatime" />
          <Card cardImgSrc="Images/Koi.jpg" brandName="Koi The" />
          <Card cardImgSrc="Images/ochaya-milktea-slider.jpg" brandName="Ochaya" />
        </div>
      </div>


    )
  }
}

export default MyCards;
