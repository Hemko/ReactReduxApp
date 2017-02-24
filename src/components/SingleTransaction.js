import React from 'react';
import { connect } from 'react-redux';

const SingleTransaction = (props) => (
  <div className="row">
    <div className="columns">
      <div>Transaction ID: {props.transaction.id}</div>
      <div>{props.transaction.amount}</div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  transaction: state.transactions
    .filter(transaction => parseInt(transaction.id, 10) === parseInt(props.params.id, 10))[0]
});

export default connect(mapStateToProps)(SingleTransaction);
