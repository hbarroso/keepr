import { AUTH_STATE_CHANGED } from '../constants/ActionTypes'
import {auth, googleProvider} from '../config'

export function authenticate() {
  return (dispatch) => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        dispatch({type: AUTH_STATE_CHANGED, user: user, token: token})
      })
    .catch((error) => {
      // Do something with this error
    });
  }
}

export function authStateChanged() {
  return (dispatch) => {
    auth.onAuthStateChanged( user => {
      let token = null
      if (user) {
        token = user.refreshToken;
      }
      dispatch({type: AUTH_STATE_CHANGED, user: user, token: token})
    });

  }
}

export function logout() {
  return (dispatch) => {
    auth.signOut()
      .then(() => {
        const token = null;
        const user = null;
        dispatch({type: AUTH_STATE_CHANGED, user: user, token: token})
      })
    .catch((error) => {
      // Do something with this error
    });
  }
}
