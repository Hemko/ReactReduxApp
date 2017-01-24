const transactionValidate = values => {
  const errors = {};
  const requiredFields = [ 'date', 'amount', 'type' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  const date = values.date;
  if (date > new Date()) {
    errors.date = 'Transaction date cannot be a future date.';
  }
  const amount = parseInt(values.amount, 10);
  if (isNaN(amount)) {
    errors.amount = 'Amount must be a number!';
  } else if (amount <= 0) {
    errors.amount = 'Amount must be greater than zero!';
  }
  return errors;
};

export default transactionValidate;
