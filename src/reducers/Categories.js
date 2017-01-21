import { ADD_CATEGORY } from '../constants/ActionTypes';

const category = (state, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state;
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, category(undefined, action)];
    default:
      return state;
  }
}

export default categories;
