import React from 'react';
import AddTransaction from '../containers/AddTransaction';
import VisibleTransactionList from '../containers/VisibleTransactionList';
import VisibleCurrencyPanel from '../containers/VisibleCurrencyPanel';

const Home = () => (
  <div>
    <VisibleCurrencyPanel />
    <AddTransaction />
    <VisibleTransactionList />
  </div>
);

export default Home;
