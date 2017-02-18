import React from 'react';

const SingleTransaction = (props) => (
  <div className="row">
    <div className="columns">
      Transaction ID: {props.params.id}
    </div>
  </div>
);

export default SingleTransaction;
