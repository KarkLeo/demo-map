import { combineReducers } from 'redux'
import { userPathReducer } from './user-path'

export const appReducer = combineReducers({
  userPath: userPathReducer,
})
