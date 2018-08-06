import React, { Component } from 'react';
import HistoryList from './HistoryList';
import { fetchHistory } from '../../actions/';
import { connect } from 'react-redux';
import Loading from '../Loading';

class History extends Component {
  componentWillMount() {
    this.props.fetchHistory();
  }
  renderContent() {
    switch (this.props.history) {
      case null:
        return <Loading />;
      case false:
        return <li>empty</li>;
      default:
        return this.props.history.map(hist => (
          <HistoryList key={hist._id} brand={hist.brandId.brand} date={hist.time.slice(0, 10)} points={hist.points} time={hist.time.slice(11,19)} />
        ));
    }
  }
  render() {
    return (
      <div>
        <div className="page-header">History</div>
        <div className="history">
          <ul>{this.renderContent()}</ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return { history: state.history };
  },
  { fetchHistory }
)(History);
