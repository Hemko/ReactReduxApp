import { CURRENCY_FETCH_SUCCESS } from '../constants/ActionTypes';

const currency = (state = {data: {}, isLoaded: false}, action) => {
  switch (action.type) {
    case CURRENCY_FETCH_SUCCESS:
      return {
        data: action.currency,
        isLoaded: true
      };
    default:
      return state;
  }
}

export default currency;
