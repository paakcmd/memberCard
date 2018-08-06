import React, { Component } from 'react';
import Card from './Card';
import Loading from '../Loading';
import { fetchCards } from '../../actions/';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

class MyCards extends Component {
  componentWillMount() {
    this.props.fetchCards();
    const socket = socketIOClient('http://localhost:5000');
    socket.on("transaction", data => this.props.fetchCards());
  }

  renderContent() {
    switch (this.props.cards) {
      case null:
        return <Loading />;
      case false:
        return <li>empty</li>;
      default:
        return this.props.cards.map(card => (
          <Card key={card.id} cardImgSrc={card.imageUrl} brandName={card.brand} points={card.sumPoints} />
        ));
    }
  }
  render() {
    return (
      <div>
        <div className="page-header">My cards</div>
        <div className="mycards">
          {this.renderContent()}
          <Card cardImgSrc="Images/fuku.jpg" brandName="Fuku Matcha" />
          <Card cardImgSrc="Images/Chatime.jpg" brandName="Chatime" />
          <Card cardImgSrc="Images/Koi.jpg" brandName="Koi The" />
          <Card cardImgSrc="Images/ochaya-milktea-slider.jpg" brandName="Ochaya" />
        </div>
      </div>


    )
  }
}


export default connect(
  state => {
    return { cards: state.cards };
  },
  { fetchCards }
)(MyCards);
