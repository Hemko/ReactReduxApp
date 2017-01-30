import React from 'react';
import AddTransaction from '../containers/AddTransaction';
import VisibleTransactionList from '../containers/VisibleTransactionList';
import VisibleCurrencyPanel from '../containers/VisibleCurrencyPanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Home = () => (
  <MuiThemeProvider>
    <div className="row">
      <div className="small-4 columns">
        <VisibleCurrencyPanel />
        <AddTransaction />
      </div>
      <div className="small-8 columns">
        <VisibleTransactionList />
      </div>
    </div>
  </MuiThemeProvider>
);

export default Home;
