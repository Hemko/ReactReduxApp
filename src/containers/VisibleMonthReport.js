import { connect } from 'react-redux';
import RangeReport from '../components/RangeReport';

const getReportByMonth = (transactions, month) => {
  const transactionsCount = transactions.length;
  let income = 0;
  let expenses = 0;
  for (let i = 0; i < transactionsCount; i++) {
    const transaction = transactions[i];
    if (transaction.date.getMonth() === month) {
      if (transaction.type === 'income') {
        income += transaction.amount;
      } else {
        expenses += transaction.amount;
      }
    }
  }
  return {
    income,
    expenses
  };
};

const mapStateToProps = (state) => {
  const date = new Date();
  const report = getReportByMonth(state.transactions, date.getMonth());

  return {
    label: "This month",
    income: report.income,
    expenses: report.expenses
  };
};

const VisibleMonthReport = connect(
  mapStateToProps
)(RangeReport);

export default VisibleMonthReport;
