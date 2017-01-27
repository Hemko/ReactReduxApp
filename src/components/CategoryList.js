import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { blue500 } from 'material-ui/styles/colors';

import '../styles/category.css';

const iconStyle = {
  height: 42,
  width: 50,
  margin: "29px auto 0",
};

const PaperContent = (name) => (
  <div className="category__content">
    <IconLocationOn style={iconStyle} color={blue500} />
    <span className="category__name">
      {name}
    </span>
  </div>
);

const CategoryList = ({ categories }) => (
  <div className="category-list">
    {categories.map(category => {
      const content = PaperContent(category.name);
      return <Paper key={category.id} className="category" circle zDepth={1} children={content} />
    })}
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CategoryList;
