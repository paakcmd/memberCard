import React, { Component } from 'react';
import HistoryList from './HistoryList';

class History extends Component {
  render() {
    return (
      <div>
        <div className="page-header">History</div>
        <div className="history">
          <ul>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
            <HistoryList brand="Ochaya" reference="8A739FD" date="09/08/2018" time="9.02AM"/>
          </ul>
        </div>
      </div>
    );
  }
}

export default History;
