import React from 'react';
import VisibleMonthReport from '../containers/VisibleMonthReport';
import '../styles/statistic.css';

const Statistic = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <VisibleMonthReport />
    </div>
  </div>
);

export default Statistic;
