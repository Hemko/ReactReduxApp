import React from 'react';
import VisibleMonthReport from '../containers/VisibleMonthReport';
import D3LineChart from './D3LineChart';
import '../styles/statistic.css';

const Statistic = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <VisibleMonthReport />
    </div>
    <div className="medium-12 large-8 columns">
      <D3LineChart />
    </div>
  </div>
);

export default Statistic;
