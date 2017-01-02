import { CURRENCY_FETCH_REQUESTED, CURRENCY_FETCH_SUCCESS, CURRENCY_FETCH_FAILURE } from '../constants/ActionTypes';

export const currencyFetchRequested = () => ({
  type: CURRENCY_FETCH_REQUESTED
});

export const currencyFetchSuccess = (currency) => ({
  type: CURRENCY_FETCH_SUCCESS,
  currency: currency
});

export const currencyFetchFailure = (message) => ({
  type: CURRENCY_FETCH_FAILURE,
  message: message
});
