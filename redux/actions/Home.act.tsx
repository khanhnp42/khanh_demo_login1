import * as types from '../constants/home.const';
// import * as types1 from '../constants/meal.const';

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
