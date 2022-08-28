import Cookies from 'js-cookie'
import { LOGOUT_USER, LOGIN_SUCCESS, REGISTER_USER } from './authTypes'

const initialState = {
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
  token: Cookies.get('token') ?? null,
  loginErrorMessage: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return state

    case LOGIN_SUCCESS:
      Cookies.set('user', JSON.stringify(action.payload.data))
      Cookies.set('token', action.payload.token)
      return {
        user: action.payload.data,
        token: action.payload.token,
      }
    case LOGOUT_USER:
      Cookies.remove('user')
      Cookies.remove('token')
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export default authReducer
