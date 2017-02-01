import React from 'react';
import AddCategory from '../containers/AddCategory';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Categories = () => (
  <div className="row">
    <div className="medium-12 large-4 columns">
      <AddCategory />
    </div>
    <div className="medium-12 large-8 columns">
      <VisibleCategoryList />
    </div>
  </div>
);

export default Categories;
