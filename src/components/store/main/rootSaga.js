import { all } from 'redux-saga/effects';
import * as customerSaga from '../../redux/customer/saga';

export function* rootSaga() {
  yield all([
    customerSaga.getAllCustomersSaga(),
  ]);
}

export default rootSaga;