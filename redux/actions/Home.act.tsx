import * as types from '../constants/home.const';

export const LogOut = () => {
  return {
    type: types.LOGOUT,
  };
};
export const ADD = () => {
  return {
    type: types.ADD,
  };
};
export const SEARCH = (title: any) => {
  return {
    type: types.SEARCH,
    title,
  };
};
export const EDIT = (id: any, title: any, color: any) => {
  return {
    type: types.EDIT,
    id,
    title,
    color,
  };
};
export const DELETE = (id: any) => {
  return {
    type: types.DELETE,
    id,
  };
};

export const CHECKED = (id: any) => {
  return {
    type: types.CHECKED,
    id,
  };
};
