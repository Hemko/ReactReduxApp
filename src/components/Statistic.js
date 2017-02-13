import React from 'react';
import VisibleMonthReport from '../containers/VisibleMonthReport';
import D3LineChart from './D3LineChart';
import '../styles/statistic.css';

var data=[
  {day:'02-11-2016',count:180},
  {day:'02-12-2016',count:250},
  {day:'02-13-2016',count:150},
  {day:'02-14-2016',count:496},
  {day:'02-15-2016',count:140},
  {day:'02-16-2016',count:380},
  {day:'02-17-2016',count:100},
  {day:'02-18-2016',count:150}
];

const Statistic = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <VisibleMonthReport />
    </div>
    <div className="medium-12 large-8 columns">
      <D3LineChart width="400" height="300" data={data}/>
    </div>
  </div>
);

export default Statistic;
