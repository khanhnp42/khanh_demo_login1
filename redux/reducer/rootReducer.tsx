import {combineReducers} from 'redux';

import {loginReducer} from './Login_red';
import {Home_red} from './Home_red';

export default combineReducers({
  Login: loginReducer,
  Home: Home_red,
});
