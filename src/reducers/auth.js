import * as types from '../constants/ActionTypes'

export function auth(state = {user:null, token:null}, action) {
  switch(action.type) {
    case types.AUTH_STATE_CHANGED:
      return {
        user: action.user,
        token: action.token
      }
    default:
      return state
  }
}
