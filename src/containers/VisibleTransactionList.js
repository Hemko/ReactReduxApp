import { connect } from 'react-redux';
import TransactionList from '../components/TransactionList';
import { removeTransaction } from '../actions/Transaction';

const sortTransactions = (first, second) => {
  var firstDate = new Date(first.date);
  var secondDate = new Date(second.date);
  return secondDate - firstDate;
};

const mapStateToProps = (state) => ({
  transactions: state.transactions.sort(sortTransactions)
});

const mapDispatchToProps = ({
  onRemoveButtonClick: removeTransaction
});

const VisibleTransactionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);

export default VisibleTransactionList;
