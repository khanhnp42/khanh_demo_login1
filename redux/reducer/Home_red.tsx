import produce from 'immer';
import {AsyncStorage} from 'react-native';

import * as types from '../constants/home.const';
import * as types1 from '../constants/meal.const';
import {LOGIN_SUCCESSED} from '../constants/login.const';
import {CATEGORIES} from '../../data/dummy-data';

interface Props {
  isAuthenticated: number;
  obj: Array<{id: string; title: string; color: any}>;
  id: string;
  title: string;
  color: any;
  isAdd: boolean;
  idMax: number;
}

const initialState: Props = {
  isAuthenticated: 1,
  obj: CATEGORIES,
  id: '',
  title: '',
  color: '',
  isAdd: false,
  idMax: 0,
};

const findIDmax = (obj: any) => {
  let element;
  for (let i = 0; i < obj.length - 1; i++) {
    element = obj[i].id > obj[i + 1].id ? obj[i].id : obj[i + 1].id;
  }
  // eslint-disable-next-line radix
  return parseInt(element) + 1;
};

export const Home_red = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGOUT:
        AsyncStorage.removeItem('token');
        draft.isAuthenticated = 1;
        break;
      case LOGIN_SUCCESSED:
        draft.isAuthenticated = 2;
        break;
      case types.ADD:
        draft.id = '';
        draft.title = '';
        draft.color = '';
        draft.isAdd = true;
        draft.idMax = findIDmax(state.obj);
        draft.isAuthenticated = 3;
        break;
      case types.EDIT:
        draft.id = action.id;
        draft.title = action.title;
        draft.color = action.color;
        draft.isAdd = false;
        draft.isAuthenticated = 3;
        break;
      case types.DELETE:
        // eslint-disable-next-line eqeqeq
        draft.obj = state.obj.filter((a) => a.id != action.id);
        break;
      case types1.OK:
        if (draft.isAdd) {
          draft.obj = state.obj.concat([
            {id: action.id, title: action.title, color: action.color},
          ]);
        } else {
          draft.obj = state.obj
            // eslint-disable-next-line eqeqeq
            .filter((a) => a.id != action.id)
            .concat([
              {id: action.id, title: action.title, color: action.color},
            ]);
        }
        draft.isAuthenticated = 2;
        break;
      case types1.CANCEL:
        draft.isAuthenticated = 2;
        break;
      default:
        return state;
    }
  });
