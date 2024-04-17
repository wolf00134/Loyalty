import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { customerActions } from './slice';
import Customers from '../../../apis/Customers';

export function* prepareDataSaga() {
  yield takeLatest(customerActions.prepareData.type, function* f() {
    try {
      yield put(customerActions.getAllCustomers());
    } catch (e) {
      console.log(e);
    }
  })
}

export function* getAllCustomersSaga() {
  yield takeEvery(customerActions.getAllCustomers.type, function* f() {
    try {
      console.log('CODE RUN HERE');
      const response = yield call(Customers);
      console.log('RESPONSE', response);
      yield put(customerActions.getAllCustomersSuccess({ customers: response.data.data.customers }));
    } catch (e) {
      yield put(customerActions.getAllCustomersFail());
    }
  })
}