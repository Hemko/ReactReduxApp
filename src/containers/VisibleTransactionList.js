import { connect } from 'react-redux';
import TransactionList from '../components/TransactionList';

const sortTransactions = (first, second) => {
  var firstDate = new Date(first.date);
  var secondDate = new Date(second.date);
  return secondDate - firstDate;
};

const mapStateToProps = (state) => ({
  transactions: state.transactions.sort(sortTransactions)
});

const VisibleTransactionList = connect(
  mapStateToProps
)(TransactionList);

export default VisibleTransactionList;
