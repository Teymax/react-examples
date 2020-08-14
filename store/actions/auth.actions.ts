import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/reducers'
import { AppDispatch } from 'store'
import { Action } from 'redux'
import { userService } from '@services'
import {
  IUser,
  AUTH_SET_DATA,
  AUTH_LOGOUT,
  AuthActionType,
  IAuthPayload,
} from '@store/types/auth.types'
import jwtDecode from 'jwt-decode'
import { IRegisterData } from '@services/user.service'

const actions = {
  setAuthData({ token, user }: IAuthPayload): AuthActionType {
    return {
      type: AUTH_SET_DATA,
      payload: {
        token,
        user,
      },
    }
  },
  loginRequest(user: IUser): ThunkAction<void, RootState, IUser, Action<void>> {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await userService.login(user)

        const { token } = res.data

        localStorage.setItem('token', token)

        const userDecoded = jwtDecode(token) as IUser

        console.log('decode', userDecoded)

        dispatch(
          actions.setAuthData({
            token,
            user: userDecoded,
          })
        )
      } catch (error) {
        console.error(error)
      }
    }
  },
  registerRequest(
    options: IRegisterData
  ): ThunkAction<void, RootState, IUser, Action<void>> {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await userService.register(options)

        console.log(res)
        const user = res.data

        dispatch(
          actions.setAuthData({
            token: '',
            user,
          })
        )

        console.log(user)
      } catch (error) {
        console.error(error)
      }
    }
  },
  logout(): AuthActionType {
    return {
      type: AUTH_LOGOUT,
    }
  },
}

export default actions
