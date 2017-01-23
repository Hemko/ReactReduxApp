import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddCategory from '../containers/AddCategory';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Categories = () => (
  <MuiThemeProvider>
    <div>
      <h1>Categories</h1>
      <AddCategory />
      <VisibleCategoryList />
    </div>
  </MuiThemeProvider>
);

export default Categories;
