import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VisibleMonthReport from '../containers/VisibleMonthReport';
import '../styles/statistic.css';

const Statistic = () => (
  <MuiThemeProvider>
    <div className="row">
      <div className="small-12 columns">
        <VisibleMonthReport />
      </div>
    </div>
  </MuiThemeProvider>
);

export default Statistic;
