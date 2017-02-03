import React, { PropTypes } from 'react';
import '../styles/rangeReport.css';

const RangeReport = (props) => {
  const total = props.income - props.expenses;
  const totalClassName = total >= 0
    ? "range-report__item_income"
    : "range-report__item_expenses";

  return <div className="range-report">
    <p className="range-report__header">{props.label}</p>
    <p className="range-report__item range-report__item_income">Income: {props.income}</p>
    <p className="range-report__item range-report__item_expenses">Expenses: {props.expenses}</p>
    <p className={"range-report__item " + totalClassName}>Total: {total}</p>
  </div>
};

RangeReport.propTypes = {
  label: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default RangeReport;
