import * as types from '../constants/login.const';
import product from 'immer';

const initalState = {
  loading: false,
  username: null,
  password: null,
  token: '',
};

export const loginReducer = (state = initalState, action: any) =>
  product(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_REQUESTED:
        draft.loading = true;
        draft.username = action.data.username;
        draft.password = action.data.password;
        break;
      case types.LOGIN_SUCCESSED:
        draft.loading = false;
        draft.token = action.data;
        break;
      case types.LOGIN_FAILED:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
