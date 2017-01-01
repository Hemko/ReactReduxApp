const validate = values => {
  const errors = {};
  const requiredFields = [ 'amount', 'type' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  const amount = parseInt(values.amount, 10);
  if (isNaN(amount)) {
    errors.amount = 'Amount must be a number!';
  } else if (amount <= 0) {
    errors.amount = 'Amount must be greater than zero!';
  }
  return errors;
};

export default validate;
