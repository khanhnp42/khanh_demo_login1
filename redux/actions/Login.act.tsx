import * as types from '../constants/login.const';
export const LoginRequested = (username: string, password: string) => {
  return {
    type: types.LOGIN_REQUESTED,
    data: {
      username,
      password,
    },
  };
};
export const LoginSuccessed = (data: any) => {
  console.log('LOGIN_SUCCESSED redux - action - login', data);
  return {
    type: types.LOGIN_SUCCESSED,
    data,
  };
};
export const LoginFailed = (data: any) => {
  console.log('LoginFailed', data);
  return {
    type: types.LOGIN_FAILED,
    data,
  };
};
