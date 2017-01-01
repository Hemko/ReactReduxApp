import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Transaction = props => (
  <TableRow hoverable selectable={false}>
    <TableRowColumn>{props.id}</TableRowColumn>
    <TableRowColumn>{props.amount}</TableRowColumn>
    <TableRowColumn>{props.type}</TableRowColumn>
  </TableRow>
);

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Transaction;
