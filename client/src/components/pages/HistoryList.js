import React from 'react';

const HistoryList = props => {
  return (
    <li>
      <div className="history-li-left">
        <div className="history-li-left-brand">{props.brand}</div>
        <div className="history-li-left-ref">Ref:{props.reference}</div>
      </div>
      <div className="history-li-right">
        <div className="history-li-right-date">{props.date}</div>
        <div className="history-li-right-time">{props.time}</div>
      </div>
    </li>
  );
};

export default HistoryList
