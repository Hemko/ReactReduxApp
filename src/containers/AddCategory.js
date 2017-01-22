import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
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
