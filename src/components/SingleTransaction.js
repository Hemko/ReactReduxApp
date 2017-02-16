import React from 'react';

const SingleTransaction = (props) => (
  <div className="row">
    <div className="columns">
      <h1>This is page with information about transaction!</h1>
      ID: {props.params.id}
    </div>
  </div>
);

export default SingleTransaction;
