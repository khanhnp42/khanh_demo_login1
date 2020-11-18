import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LoginSuccessed, LoginFailed} from '../../actions/Login.act';
import * as types from '../../constants/login.const';

export function* loginSaga(action: any) {
  // const getUrl = 'https://5f96851a11ab98001603ac14.mockapi.io/khanhnp';
  try {
    //   const data = yield call(axios.request, {
    //     url: getUrl,
    //     method: 'POST',
    //     data: {
    //       username: action.data.username,
    //       password: action.data.password,
    //     },
    //   });
    //   if (data) {
    //     AsyncStorage.setItem('token', data.data.token);
    yield put(LoginSuccessed('6'));
    // }
  } catch (error) {
    yield put(LoginFailed(error));
  }
}

export default function* signInSaga() {
  yield takeLatest(types.LOGIN_REQUESTED, loginSaga);
}
