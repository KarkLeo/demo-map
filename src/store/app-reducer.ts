import { combineReducers } from 'redux'
import { userPathReducer } from './user-path'
import { modeReducer } from './mode'

export const appReducer = combineReducers({
  userPath: userPathReducer,
  mode: modeReducer,
})
