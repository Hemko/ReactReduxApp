import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/transaction.css';

const Transaction = props => {
  const date = new Date(props.date);
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const dateString = day + "." + month + "." + date.getFullYear();

  return (
    <TableRow className="transaction" hoverable selectable={false}>
      <TableRowColumn>{dateString}</TableRowColumn>
      <TableRowColumn>{props.amount}</TableRowColumn>
      <TableRowColumn className={"transaction__type transaction__type_" + props.type}>
        {props.type}
      </TableRowColumn>
      <TableRowColumn>
        <div className="transaction__toolbar">
          <RaisedButton  onClick={props.onDelete}>DELETE</RaisedButton >
        </div>
      </TableRowColumn>
    </TableRow>
  );
};

Transaction.propTypes = {
  date: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Transaction;
