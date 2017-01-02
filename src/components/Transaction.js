import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Transaction = props => {
  const date = new Date(props.date);
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const dateString = day + "." + month + "." + date.getFullYear();

  return (
    <TableRow hoverable selectable={false}>
      <TableRowColumn>{dateString}</TableRowColumn>
      <TableRowColumn>{props.amount}</TableRowColumn>
      <TableRowColumn>{props.type}</TableRowColumn>
    </TableRow>
  );
};

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Transaction;
