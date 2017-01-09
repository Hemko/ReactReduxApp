import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../constants/ActionTypes';

const transaction = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        id: action.id,
        date: action.date,
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
    case REMOVE_TRANSACTION:
      return state.filter((transaction) => {
        return transaction.id !== action.id;
      });
    default:
      return state;
  }
}

export default transactions;
