import React from 'react';
import AddCategory from '../containers/AddCategory';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Categories = () => (
  <div className="row">
    <div className="small-4 columns">
      <AddCategory />
    </div>
    <div className="small-8 columns">
      <VisibleCategoryList />
    </div>
  </div>
);

export default Categories;
