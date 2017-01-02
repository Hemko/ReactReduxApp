import { ADD_TRANSACTION } from '../constants/ActionTypes';

export const addTransaction = (amount, transactionType) => ({
  type: ADD_TRANSACTION,
  id: Date.now(),
  date: Date.now(),
  transactionType,
  amount
});
