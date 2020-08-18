import {
  IUser,
  AuthActionType,
  AUTH_SET_DATA,
  AUTH_LOGOUT,
} from '@store/types/auth.types';
import JwtDecode from 'jwt-decode';

interface IAuthState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
}

const localToken = (process.browser && localStorage.getItem('token')) || '';

const initialState: IAuthState = {
  user: localToken ? JwtDecode(localToken) : null,
  token: localToken,
  isLoggedIn: !!localToken,
};

const reducer = (
  state: IAuthState = initialState,
  action: AuthActionType
): IAuthState => {
  switch (action.type) {
    case AUTH_SET_DATA:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case AUTH_LOGOUT:
      return {
        user: null,
        token: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
