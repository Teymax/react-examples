import { IUser, AuthActionType, AUTH_SET_DATA } from '@store/types/auth.types'
import JwtDecode from 'jwt-decode'

interface IAuthState {
  user: IUser
  token: string
}

const localToken = (process.browser && localStorage.getItem('token')) || ''

const initialState: IAuthState = {
  user: localToken ? JwtDecode(localToken) : null,
  token: localToken,
}

const reducer = (
  state: IAuthState = initialState,
  action: AuthActionType
): IAuthState => {
  switch (action.type) {
    case AUTH_SET_DATA:
      return { ...state, user: action.payload.user, token: action.payload.token }
    default:
      return state
  }
}

export default reducer
