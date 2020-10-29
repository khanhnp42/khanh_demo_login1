// Skip to content
// Search or jump to…

// Pull requests
// Issues
// Marketplace
// Explore

// @khanhnp42
// haitq1
//   /
//   loginnative
// 1
// 00
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// loginnative / NameProject / sagas / Login / Login.saga.ts /
// @haitq1
// haitq1 Hai
// …
// Latest commit e0320ec 6 days ago
// History
// 1 contributor
// 28 lines(28 sloc)  1.06 KB

// import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import { LoginSuccessed, LoginFailed } from '../../actions/Login.act';
// import * as types from '../../constants/Login.const';
// import { AsyncStorage } from 'react-native';
// // import AsyncStorage  from '@react-native-community/async-storage';
// export function* loginSaga(action: any) {
//   const getUrl = 'https://5f867e43c8a16a0016e6b588.mockapi.io/user'
//   try {
//     const data = yield call(axios.request, {
//       url: getUrl,
//       method: 'POST',
//       data: {
//         username: action.data.username,
//         password: action.data.password,
//       }
//     })
//     if (data) {
//       AsyncStorage.setItem('token', data.data.token);
//       yield put(LoginSuccessed(data.data.token));
//     }
//   } catch (error) {
//     yield put(LoginFailed(error))
//   }
// }
// export default function* signInSaga() {
//   yield takeLatest(types.LOGIN_REQUESTED, loginSaga);
// }
