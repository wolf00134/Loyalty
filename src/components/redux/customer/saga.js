import { call, put, select, takeEvery } from 'redux-saga/effects';
import { customerActions } from './slice';
import Customers from '../../../apis/Customers';

export function* getAllCustomersSaga() {
  yield takeEvery(customerActions.getAllCustomers.type, function* f(action) {
    try {
      const response = yield call(Customers.get("/"))
      console.log('RESPONSE', response);
      yield put(customerActions.getAllCustomersSuccess({ customers: response.data.customers }));
    } catch (e) {}
  })
}