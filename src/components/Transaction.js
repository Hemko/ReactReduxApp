import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import '../styles/transaction.css';

const Transaction = props => {
  const date = new Date(props.date);
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const dateString = day + "." + month + "." + date.getFullYear();
  const prefix = props.type === 'income' ? '+' : '-';

  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <TableRow className="transaction" hoverable selectable={false}>
      <TableRowColumn><Link to={`transaction/${props.id}/`}>{dateString}</Link></TableRowColumn>
      <TableRowColumn className={"transaction__value transaction__value_" + props.type}>
        {prefix + props.amount}
      </TableRowColumn>
      <TableRowColumn>
        <div className="transaction__toolbar">
          <IconDelete
            onClick={props.onDelete}
            className="transaction__icon"
            style={iconStyle}
            color={"rgba(0, 0, 0, 0.541176)"}
            hoverColor={"rgba(0, 0, 0, 0.7)"}
          />
          <IconEdit
            onClick={(e) => {console.log("Edit button. ", e);}}
            style={iconStyle}
            className="transaction__icon"
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
