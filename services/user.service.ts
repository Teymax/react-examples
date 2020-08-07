import { customAxios } from '@core'
import { AUTH_URL } from '@core/axios'

export interface ILoginData {
  username: string
  password: string
}

export const login = (loginData: ILoginData) => {
  return customAxios.post(`${AUTH_URL}/users/authenticate`, loginData)
}

export const register = (loginData: ILoginData) => {
  return customAxios.post(`${AUTH_URL}/users/register`, loginData)
}
