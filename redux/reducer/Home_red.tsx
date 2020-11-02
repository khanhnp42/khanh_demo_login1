import * as types from '../constants/home.const';
import {LOGIN_SUCCESSED} from '../constants/login.const';
import produce from 'immer';
import {AsyncStorage} from 'react-native';

interface Props {
  isAuthenticated: boolean;
}

const initialState: Props = {
  isAuthenticated: false,
};
export const Home_red = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGOUT:
        AsyncStorage.removeItem('token');
        draft.isAuthenticated = false;
        break;
      case LOGIN_SUCCESSED:
        draft.isAuthenticated = true;
        break;
      default:
        return state;
    }
  });
