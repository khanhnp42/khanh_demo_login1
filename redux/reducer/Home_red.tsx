import produce from 'immer';
import {AsyncStorage} from 'react-native';

import * as types from '../constants/home.const';
import {LOGIN_SUCCESSED} from '../constants/login.const';
import {CATEGORIES} from '../../data/dummy-data';

interface Props {
  isAuthenticated: boolean;
  obj: Array<{id: any; title: any; color: any}>;
  id: [];
  title: string;
}

const initialState: Props = {
  isAuthenticated: false,
  obj: CATEGORIES,
  id: [],
  title: '',
};

const findIDmax = (obj: any) => {
  let element;
  for (let i = 0; i < obj.length - 1; i++) {
    element = obj[i].id > obj[i + 1].id ? obj[i].id : obj[i + 1].id;
  }
  return element + 1;
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
      case types.ADD:
        draft.obj = state.obj.concat([
          {id: findIDmax(state.obj), title: action.title, color: ''},
        ]);
        break;
      case types.EDIT:
        draft.obj = state.obj
          // eslint-disable-next-line eqeqeq
          .filter((a) => a.id != action.id)
          .concat([{id: action.id, title: action.title, color: ''}]);
        break;
      case types.DELETE:
        // eslint-disable-next-line eqeqeq
        draft.obj = state.obj.filter((a) => a.id != action.id);
        break;
      default:
        return state;
    }
  });
