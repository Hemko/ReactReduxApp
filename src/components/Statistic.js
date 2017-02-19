import React from 'react';
import VisibleMonthReport from '../containers/VisibleMonthReport';
import VisibleD3LineChart from '../containers/VisibleD3LineChart';
import '../styles/statistic.css';

const Statistic = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <VisibleMonthReport />
    </div>
    <div className="medium-12 large-8 columns">
      <VisibleD3LineChart width="400" height="300" />
    </div>
  </div>
);

export default Statistic;
