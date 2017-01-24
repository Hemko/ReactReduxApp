import React from 'react';
import { reduxForm, Field } from 'redux-form';
import transactionValidate from '../forms/transactionValidate';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { DatePicker, TextField, SelectField } from 'redux-form-material-ui';
import { addTransaction } from '../actions/Transaction';

const AddTransaction = (props) => {
  const { dispatch, handleSubmit, reset, pristine, submitting } = props;

  const submit = (values) => {
    dispatch(addTransaction(values.date, parseInt(values.amount, 10), values.type));
    dispatch(reset('AddTransactionForm'));
  };

  const formatVisibleDate = (date) => {
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return day + "." + month + "." + date.getFullYear();
  };

  return (
    <MuiThemeProvider>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Field name="date"
            component={DatePicker}
            hintText="Pick your date"
            floatingLabelText="Date"
            formatDate={formatVisibleDate}
            format={null}
          />
        </div>
        <div>
          <Field name="amount"
            component={TextField}
            hintText="The amount of money"
            floatingLabelText="Amount"
          />
        </div>
        <div>
          <Field name="type"
            component={SelectField}
            floatingLabelText="Type">
            <MenuItem value={'income'} primaryText="Income" />
            <MenuItem value={'expenses'} primaryText="Expenses" />
          </Field>
        </div>
        <RaisedButton
          type="submit"
          label="Add Transaction"
          primary
          disabled={pristine || submitting}
        />
      </form>
    </MuiThemeProvider>
  );
};

export default reduxForm({
  form: 'AddTransactionForm',
  validate: transactionValidate
})(AddTransaction);
