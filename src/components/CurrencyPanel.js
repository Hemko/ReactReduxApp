import React, { PropTypes } from 'react';

const CurrencyPanel = (props) => {
  let content = "";
  if (props.isLoaded) {
    content = "1 " + props.currency.base + " = " + props.currency.rates.RUB + " RUB";
  } else {
    content = "Loading...";
  }

  return (
    <div className="sidebar-section">
      <span className="sidebar-section__header">Currency</span>
      <div> {content} </div>
    </div>
  );
};

CurrencyPanel.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  currency: PropTypes.object.isRequired
};

export default CurrencyPanel;
