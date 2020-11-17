import {all} from 'redux-saga/effects';

import signInSaga from '../saga/Login/Login.saga';

export default function* rootSaga() {
  yield all([signInSaga()]);
}
