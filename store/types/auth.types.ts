import { IAction } from '@interfaces'

export const AUTH_SET_DATA = 'AUTH_SET_DATA'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export interface IUser {
  username: string
  email: string
  password: string
}

export interface IAuthPayload {
  token: string
  user: IUser
}

interface IAuthAction extends IAction {
  type: typeof AUTH_SET_DATA
  payload: IAuthPayload
}

interface IAuthLogoutAction extends IAction {
  type: typeof AUTH_LOGOUT
}

export type AuthActionType = IAuthAction | IAuthLogoutAction
