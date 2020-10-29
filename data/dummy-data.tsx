import {call} from 'redux-saga/effects';
import axios from 'axios';

// let data: any;

function* dummydata() {
  const getUrl = 'https://5f96851a11ab98001603ac14.mockapi.io/khanhnp';
  const data = yield call(axios.request, {
    url: getUrl,
    method: 'GET',
  });
  return data;
}

export default dummydata;
