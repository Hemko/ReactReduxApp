import { connect } from 'react-redux';
import D3LineChart from '../components/D3LineChart';

const handleTransactions = (transactions) => {
  return transactions.reduce(function(arr, item) {
    const prevSum = arr.length === 0 ? 0 : arr[arr.length - 1].sum;
    const currentAmount = item.type === 'income' ? item.amount : -item.amount;
    arr.push({
      amount: item.amount,
      date: item.date,
      id: item.id,
      type: item.type,
      sum: prevSum + currentAmount
    });
    return arr;
  }, []);
};

const mapStateToProps = (state) => ({
  transactions: handleTransactions(state.transactions)
});

const VisibleD3LineChart = connect(
  mapStateToProps
)(D3LineChart);

export default VisibleD3LineChart;
