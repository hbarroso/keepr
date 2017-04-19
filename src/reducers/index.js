import { combineReducers } from 'redux'
import { auth } from './auth'
import { lists } from './lists'

export const rootReducer = combineReducers({ auth, lists })
