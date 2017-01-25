const categoryValidate = values => {
  const errors = {};
  const requiredFields = [ 'name', 'icon' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  const name = values.name != null ? values.name : "";
  if (name.trim() === "") {
    errors.name = 'Category name cannot be empty.';
  }
  return errors;
};

export default categoryValidate;
