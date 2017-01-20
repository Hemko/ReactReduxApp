import React from 'react';
import AddCategory from '../containers/AddCategory';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Categories = () => (
  <div>
    <h1>Categories</h1>
    <AddCategory />
    <VisibleCategoryList />
  </div>
);

export default Categories;
