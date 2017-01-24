import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, SelectField } from 'redux-form-material-ui';
import { addCategory } from '../actions/Category';

const AddCategory = (props) => {
  const { dispatch, handleSubmit, reset, pristine, submitting } = props;

  const submit = (values) => {
    dispatch(addCategory(values.name));
    dispatch(reset('AddCategoryForm'));
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field name="name"
          component={TextField}
          hintText="The name of the category"
          floatingLabelText="Name"
        />
      </div>
      <div>
        <Field name="icon"
          component={SelectField}
          floatingLabelText="Icon">
          <MenuItem value={'first'} primaryText="First icon" />
          <MenuItem value={'second'} primaryText="Second icon" />
        </Field>
      </div>
      <RaisedButton
        type="submit"
        label="Add category"
        primary
        disabled={pristine || submitting}
      />
    </form>
  );
};

export default reduxForm({
  form: 'AddCategoryForm'
})(AddCategory);
