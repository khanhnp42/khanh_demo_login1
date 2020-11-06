import * as types from '../constants/home.const';

export const LogOut = () => {
  return {
    type: types.LOGOUT,
  };
};
export const ADD = (title: any) => {
  return {
    type: types.ADD,
    title,
  };
};
export const EDIT = (id: any, title: any) => {
  return {
    type: types.EDIT,
    id,
    title,
  };
};
export const DELETE = (id: any) => {
  return {
    type: types.DELETE,
    id,
  };
};
