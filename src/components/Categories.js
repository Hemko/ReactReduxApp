import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddCategory from '../containers/AddCategory';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Categories = () => (
  <MuiThemeProvider>
    <div className="row">
      <div className="small-4 columns">
        <AddCategory />
      </div>
      <div className="small-8 columns">
        <VisibleCategoryList />
      </div>
    </div>
  </MuiThemeProvider>
);

export default Categories;
