import {combineReducers} from 'redux';

import {loginReducer} from './Login_red';

export default combineReducers({
  login: loginReducer,
});
