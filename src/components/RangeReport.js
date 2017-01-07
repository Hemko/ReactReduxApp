import React, { PropTypes } from 'react';

const RangeReport = (props) => (
    <div>
      <p>{props.label}</p>
      <p>Income: {props.income}</p>
      <p>Expenses: {props.expenses}</p>
    </div>
);

RangeReport.propTypes = {
  label: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default RangeReport;
