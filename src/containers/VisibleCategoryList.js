import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';

const mapStateToProps = (state) => ({
  categories: state.categories
});

const VisibleCategoryList = connect(
  mapStateToProps
)(CategoryList);

export default VisibleCategoryList;
