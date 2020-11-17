import * as types from '../constants/todo.const';

export const OK = (id: any, title: any, color: any) => {
  return {
    type: types.OK,
    id,
    title,
    color,
  };
};
export const CANCEL = () => {
  return {
    type: types.CANCEL,
  };
};
