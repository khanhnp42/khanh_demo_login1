import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as types from '../constants/home.const';
import * as types1 from '../constants/todo.const';
import {LOGIN_SUCCESSED} from '../constants/login.const';
import {CATEGORIES} from '../../data/dummy-data';

interface Props {
  isAuthenticated: boolean;
  obj: Array<{id: string; title: string; color: any}>;
  search: Array<{id: string; title: string; color: any}>;
  id: string;
  title: string;
  color: any;
  isAdd: boolean;
  idMax: number;
}

const initialState: Props = {
  isAuthenticated: true,
  obj: CATEGORIES,
  search: CATEGORIES,
  id: '',
  title: '',
  color: '',
  isAdd: false,
  idMax: 0,
};

const onSearch = (title: any, obj: any, search: any) => {
  if (title === '') {
    return search;
  }
  let newObj: any[] = [];
  for (let i = 0; i < obj.length; i++) {
    const element = obj[i].title.toLowerCase();
    if (element.includes(title.toLowerCase())) {
      newObj = newObj.concat([
        {id: obj[i].id, title: obj[i].title, color: obj[i].color},
      ]);
    }
  }
  return newObj;
};

export const Home_red = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGOUT:
        AsyncStorage.removeItem('token');
        draft.isAuthenticated = true;
        break;

      case LOGIN_SUCCESSED:
        draft.isAuthenticated = false;
        break;

      case types.DELETE:
        draft.obj = state.obj.filter((a) => a.id !== action.id);
        draft.search = draft.obj;
        break;

      case types.SEARCH:
        draft.obj = draft.search;
        draft.obj = onSearch(action.title, state.obj, state.search);
        break;

      case types1.OK:
        if (draft.isAdd) {
          draft.obj = state.obj.concat([
            {id: action.id, title: action.title, color: action.color},
          ]);
        } else {
          draft.obj = state.obj
            .filter((a) => a.id !== action.id)
            .concat([
              {id: action.id, title: action.title, color: action.color},
            ]);
        }
        draft.search = draft.obj;
        break;

      case types1.CANCEL:
        break;
      default:
        return state;
    }
  });
