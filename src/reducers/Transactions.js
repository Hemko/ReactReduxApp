import { ADD_TRANSACTION } from '../constants/ActionTypes';

const transaction = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        id: action.id,
        amount: action.amount,
        type: action.transactionType
      }
    default:
      return state;
  }
}

const transactions = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, transaction(undefined, action)];
    default:
      return state;
  }
}

export default transactions;
