import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { currencyFetchSuccess, currencyFetchFailure } from '../actions/Currency';
import { CURRENCY_FETCH_REQUESTED } from '../constants/ActionTypes';

function* getCurrency(action) {
   try {
      const result = yield call(fetch, "http://api.fixer.io/latest");
      const json = yield result.json();
      yield put(currencyFetchSuccess(json));
   } catch (e) {
      yield put(currencyFetchFailure(e.message));
   }
}

function* currencySaga() {
  yield takeLatest(CURRENCY_FETCH_REQUESTED, getCurrency);
}

export default currencySaga;
