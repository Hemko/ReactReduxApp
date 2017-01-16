import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { blue500 } from 'material-ui/styles/colors';

const iconStyle = {
  height: 42,
  width: 50,
  marginTop: 29,
};
const nearbyIcon = <IconLocationOn style={iconStyle} color={blue500} />;

const paperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const CategoryList = ({ categories }) => (
  <MuiThemeProvider>
    <div>
      <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
      <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
      <Paper style={paperStyle} zDepth={1} circle={true} children={nearbyIcon} />
      {categories.map(category =>
        <div key={category.id}>
          <span>{category.name}</span>
        </div>
      )}
    </div>
  </MuiThemeProvider>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CategoryList;
