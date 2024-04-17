import { all } from 'redux-saga/effects';
import * as customerSagas from '../../redux/customer/saga';

export function* rootSaga() {
  yield all([
    customerSagas.prepareDataSaga(),
    customerSagas.getAllCustomersSaga(),
  ]);
}

export default rootSaga;