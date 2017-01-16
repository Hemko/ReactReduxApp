import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconDelete from 'material-ui/svg-icons/action/delete';
import '../styles/transaction.css';

const Transaction = props => {
  const date = new Date(props.date);
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const dateString = day + "." + month + "." + date.getFullYear();

  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <TableRow className="transaction" hoverable selectable={false}>
      <TableRowColumn>{dateString}</TableRowColumn>
      <TableRowColumn>{props.amount}</TableRowColumn>
      <TableRowColumn className={"transaction__type transaction__type_" + props.type}>
        {props.type}
      </TableRowColumn>
      <TableRowColumn>
        <div className="transaction__toolbar">
          <IconDelete
            onClick={props.onDelete}
            style={iconStyle}
            color={"rgba(0, 0, 0, 0.541176)"}
            hoverColor={"rgba(0, 0, 0, 0.7)"}
          />
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
