import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../constants/ActionTypes';

export const addTransaction = (date, amount, transactionType) => ({
  type: ADD_TRANSACTION,
  id: Date.now(),
  date,
  transactionType,
  amount
});

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  id
});
