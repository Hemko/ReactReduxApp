import { ADD_TRANSACTION } from '../constants/ActionTypes';

export const addTransaction = (date, amount, transactionType) => ({
  type: ADD_TRANSACTION,
  id: Date.now(),
  date,
  transactionType,
  amount
});
