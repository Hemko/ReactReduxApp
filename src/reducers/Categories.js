import { ADD_CATEGORY } from '../constants/ActionTypes';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return state;
    default:
      return state;
  }
}

export default categories;
