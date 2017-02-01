import React from 'react';
import AddTransaction from '../containers/AddTransaction';
import VisibleTransactionList from '../containers/VisibleTransactionList';
import VisibleCurrencyPanel from '../containers/VisibleCurrencyPanel';

const Home = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <VisibleCurrencyPanel />
      <AddTransaction />
    </div>
    <div className="medium-12 large-8 columns">
      <VisibleTransactionList />
    </div>
  </div>
);

export default Home;
