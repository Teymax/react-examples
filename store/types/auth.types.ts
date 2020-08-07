import { IAction } from '@interfaces'

export const AUTH_SET_DATA = 'AUTH_SET_DATA'

export interface IUser {
  username: string
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

export type AuthActionType = IAuthAction
