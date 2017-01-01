import { connect } from 'react-redux';
import TransactionList from '../components/TransactionList';

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

const VisibleTransactionList = connect(
  mapStateToProps
)(TransactionList);

export default VisibleTransactionList;
