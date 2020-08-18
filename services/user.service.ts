import { customAxios } from '@core';
import { AUTH_URL } from '@core/axios';

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  state: string;
  birthDate: string;
  isOffersChecked: boolean;
}

export const login = (loginData: ILoginData) => {
  return customAxios.post(`${AUTH_URL}/users/authenticate`, loginData);
};

export const register = (loginData: IRegisterData) => {
  return customAxios.post(`${AUTH_URL}/users/register`, loginData);
};
